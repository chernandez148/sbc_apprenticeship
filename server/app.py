import os
import requests
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import boto3
from botocore.exceptions import ClientError

app = Flask(__name__)
CORS(app)

app.config["MAIL_SERVER"] = os.environ['MAIL_SERVER']
app.config["MAIL_PORT"] = os.environ['MAIL_PORT']
app.config["MAIL_USERNAME"] = os.environ["MAIL_USERNAME"]
app.config["MAIL_PASSWORD"] = os.environ["MAIL_PASSWORD"]
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False

mail = Mail(app)

def get_secret():
    secret_name = "YELP_API_KEY"
    region_name = "us-east-2"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
        # Parse the JSON string and extract the API key
        secret_dict = json.loads(get_secret_value_response['SecretString'])
        return secret_dict[secret_name]  # Return only the API key
    except ClientError as e:
        print(f"Error retrieving secret: {e}")  # Adjusted to print the error
        return None

@app.route('/')
def hello_woorld():
        return "Hello World"

@app.route('/api/reviews')
def get_reviews():
    API_KEY = get_secret()
    if not API_KEY:
        return jsonify({'error': 'API key not found'}), 500

    url = 'https://api.yelp.com/v3/businesses/zIZilc627CP6M0oYUn8UhQ/reviews'

    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Accept': 'application/json'
    }

    params = {
        'limit': request.args.get('limit', '20'),
        'sort_by': request.args.get('sort_by', 'yelp_sort')
    }

    response = requests.get(url, headers=headers, params=params)

    if response.ok:
        return jsonify(response.json())
    else:
        error_message = response.json()
        return jsonify({'error': 'Failed to fetch data from Yelp', 'details': error_message}), response.status_code
    
@app.route("/api/submit-form", methods=["POST"])
def submit_form():
    try:
        data = request.get_json()

        # Send an email with the form data
        send_email(data)

        return jsonify({"message": "Form data received successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def send_email(data):
    try:
        msg = MIMEMultipart()
        msg["From"] = "your_email@example.com"
        msg["To"] = "your_email@example.com"  # Replace with your email address
        msg["Subject"] = "New Form Submission"

        # Create the email body with form data
        body = f"New form submission:\n\n"
        for key, value in data.items():
            body += f"{key}: {value}\n"

        msg.attach(MIMEText(body, "plain"))

        # Connect to the SMTP server and send the email
        server = smtplib.SMTP(app.config["MAIL_SERVER"], app.config["MAIL_PORT"])
        server.starttls()
        server.login(app.config["MAIL_USERNAME"], app.config["MAIL_PASSWORD"])
        server.sendmail("your_email@example.com", "your_email@example.com", msg.as_string())
        server.quit()
    except Exception as e:
        print(str(e))


if __name__ == '__main__':
    app.run()