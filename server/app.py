import os
import requests
import smtplib
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["MAIL_SERVER"] = os.environ['MAIL_SERVER']
app.config["MAIL_PORT"] = os.environ['MAIL_PORT']
app.config["MAIL_USERNAME"] = os.environ["MAIL_USERNAME"]
app.config["MAIL_PASSWORD"] = os.environ["MAIL_PASSWORD"]
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
yelp_key = os.environ['API_KEY']

mail = Mail(app)

@app.route('/')
def hello_woorld():
        return "Hello World"

@app.route('/api/reviews')
@cross_origin(origin='https://app.sbcapprenticeship.com')
def get_reviews():
    API_KEY = yelp_key
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
    
@app.route("/submit-form", methods=["POST"])
def submit_form():
    try:
        data = request.get_json()

        all_yes = all(data.get(key) == 'yes' for key in ['age_restriction', 'us_status', 'photo_id', 'transportation', 'orientation'])

        user_first_name = data.get('first_name')
        user_last_name = data.get("last_name")
        user_email = data.get('email')  # User's email
        admin_email = "admissions@sbcapprenticeship.com"  # Your (administrator's) email

        if all_yes:
            # Prepare email body with form data for admin
            admin_body = "New pre-approved form from:\n\n" + "\n".join(f"{key}: {value}" for key, value in data.items())
            send_email(admin_email, "New Form Submission", admin_body)

            # Send a congratulatory email to the user
            user_subject = "Congratulations on your pre-approval!"
            user_body = (
                f"Exciting news, {user_first_name} {user_last_name}!\n\n"
                "You've been pre-approved to enroll at San Bernardino Cuts Barbering and Cosmetology Institute. "
                "We're thrilled to have you on board and are eager to let you know what comes next.\n\n"
                "Before you officially enroll, we kindly request that you complete our orientation session. "
                "This will take place at our institute located at:\n"
                "165 W Hospitality Lane Suite 13-14, San Bernardino, CA 92408.\n\n"
                "Please note that attendance at this orientation is mandatory, and you won't be able to commence the program until it's successfully completed. "
                "We've made it convenient for you by offering walk-in sessions every Thursday and Friday starting at 12:00 PM. "
                "To ensure a smooth experience, you're welcome to call ahead of time at (909) 384-0792 to let our staff know about your planned arrival.\n\n"
                "Thank you for choosing San Bernardino Cuts Barbering and Cosmetology Institute. "
                "We look forward to meeting you soon!\n\n"
                "Best regards,\n"
                "San Bernardino Cuts Barbering and Cosmetology Institute"
            )

            send_email(user_email, user_subject, user_body)

            return jsonify({"message": "Form data received and processed successfully"}), 200
        else:
            # Send a regret email to the user
            rejection_subject = "Your Application to San Bernardino Cuts Barbering and Cosmetology Institute"
            rejection_body = (
                f"Dear {user_first_name} {user_last_name},\n\n"
                "Thank you for your interest in San Bernardino Cuts Barbering and Cosmetology Institute. "
                "We appreciate the time you invested in your application.\n\n"
                "After careful consideration, we regret to inform you that we are unable to offer you admission at this time. "
                "Our decision is based on specific enrollment criteria and the number of applications we receive. "
                "This decision does not diminish the value of your qualifications or your potential.\n\n"
                "We encourage you to apply again in the future should your circumstances change, or consider other programs that may align with your interests and goals. "
                "If you have any questions or need further clarification, please do not hesitate to contact us at (909) 384-0792.\n\n"
                "Thank you again for considering San Bernardino Cuts Barbering and Cosmetology Institute for your education and training. "
                "We wish you all the best in your future endeavors.\n\n"
                "Sincerely,\n"
                "The Admissions Team\n"
                "San Bernardino Cuts Barbering and Cosmetology Institute"
            )

            send_email(user_email, rejection_subject, rejection_body)
            return jsonify({"message": "Form not processed: not all answers are 'yes'"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

def send_email(recipient_email, subject, body):
    try:
        msg = MIMEMultipart()
        msg["From"] = app.config["MAIL_USERNAME"]
        msg["To"] = recipient_email
        msg["Subject"] = subject

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP_SSL(app.config["MAIL_SERVER"], app.config["MAIL_PORT"])
        server.login(app.config["MAIL_USERNAME"], app.config["MAIL_PASSWORD"])
        server.sendmail(msg["From"], msg["To"], msg.as_string())
        server.quit()
    except Exception as e:
        print("Failed to send email:", e)
        raise

@app.route('/send-email', methods=['POST'])
def contact_form():
    data = request.get_json()
    full_name = data.get('full_name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Construct the email
    msg = Message(subject,
                  sender=(full_name, email),
                  recipients=[app.config['MAIL_USERNAME']],
                  body=f"From: {full_name}\nEmail: {email}\n\n{message}")

    try:
        mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
