import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { IoLocationSharp, IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './styles.css'

function ContactForm({ setContactForm }) {

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
                const response = await fetch("/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Handle success (e.g., show a success message)
                    console.log("Email sent successfully");
                } else {
                    // Handle errors (e.g., show an error message)
                    console.error("Error sending email");
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className='contact-form-right'>
                    <div className='inner-contact-form-right'>
                        <h2>Contact us</h2>
                        <p>Have any questions about enrollment?</p>
                        <ul className='contact'>
                            <li><IoLocationSharp /><a>182 5th St, San Bernardino, CA 92401</a></li>
                            <li><IoPhonePortraitOutline /><a>(909) 384-0792</a></li>
                        </ul>
                        <h2>Or follow us</h2>
                        <ul className='follow'>
                            <li><FaFacebookF size={24} /></li>
                            <li><FaTwitter size={24} /></li>
                            <li><FaInstagram size={24} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm