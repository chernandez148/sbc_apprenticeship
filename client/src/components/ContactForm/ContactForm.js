import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { IoLocationSharp, IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ReCaptcha from 'react-google-recaptcha'
import './styles.css'

function ContactForm({ setContactForm }) {
    const [capVal, setCapVal] = useState(null)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const recaptcha_key = process.env.REACT_APP_RECAPTCHA_KEY;

    const handleCloseForm = () => {
        setContactForm(false)
    }

    const formSchema = yup.object().shape({
        full_name: yup.string().required("Full name required"),
        email: yup.string().email("Invalid email").required("Email required"),
        subject: yup.string().required("Subject required"),
        message: yup.string().required("Message required"),
    });

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: formSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch("https://app.sbcapprenticeship.com/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });


                if (response.ok) {
                    // Handle success (e.g., show a success message)
                    setSuccessMessage("Email sent successfully, we will reply back you you soon.");

                    setTimeout(() => {
                        setSuccessMessage("");
                        setContactForm(false)
                    }, 2500);

                } else {
                    // Handle errors (e.g., show an error message)
                    setErrorMessage("Error sending email, please try again.");

                    setTimeout(() => {
                        setErrorMessage("");
                        setContactForm(false)
                    }, 2500);
                }
            } catch (error) {
                // Handle fetch request errors
                console.error("Error sending email:", error);
            }

            // Optionally, reset the form after successful submission
            resetForm();
        },

    });


    return (
        <div className='ContactForm'>
            <div className='contact-wrapper'>
                <button onClick={handleCloseForm} className='close-form'>X</button>
                <div className='contact-form-left'>
                    <h2>Send us a messgae</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Full Name*"
                            onChange={formik.handleChange}
                            value={formik.values.full_name}
                        />
                        {formik.touched.full_name && formik.errors.full_name ? (
                            <div className="error">{formik.errors.full_name}</div>
                        ) : null}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject*"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <div className="error">{formik.errors.subject}</div>
                        ) : null}
                        <textarea
                            name="message"
                            placeholder="Message*"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            rows="8"
                        ></textarea>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="error">{formik.errors.message}</div>
                        ) : null}
                        <ReCaptcha
                            sitekey={recaptcha_key}
                            onChange={(val) => setCapVal(val)}
                        />
                        <button disabled={!capVal} type="submit">Submit</button>
                    </form>
                </div>
                <div className='contact-form-right'>
                    <div className='inner-contact-form-right'>
                        <h2>Contact us</h2>
                        <p>Have any questions about enrollment?</p>
                        <ul className='contact'>
                            <li><IoLocationSharp /><a href='https://maps.app.goo.gl/3hnDwSVUzLCK3B846'>165 W Hospitality Lane Suite 13-14, San Bernardino, CA 92408</a></li>
                            <li><IoPhonePortraitOutline /><a href='tel:+19093840792'>(909) 384-0792</a></li>
                        </ul>
                        <h2>Or follow us</h2>
                        <ul className='follow'>
                            <li><a href='https://www.facebook.com/sbcapprenticeship/'><FaFacebookF size={24} /></a></li>
                            <li><a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fcuts_san'><FaTwitter size={24} /></a></li>
                            <li><a href='https://www.instagram.com/sbcapprenticeship/?hl=en'><FaInstagram size={24} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {successMessage && (
                <div className='toast'>
                    <p style={{ color: "green" }}>{successMessage}</p>
                </div>
            )}
            {errorMessage && (
                <div className='toast'>
                    <p style={{ color: "red" }}>{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm