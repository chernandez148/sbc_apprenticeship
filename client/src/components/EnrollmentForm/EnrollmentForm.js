import React from "react";
import Button from "../Button/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import "./styles.css";

function EnrollmentForm({ setEnrollmentForm }) {
  const handleCloseEnrollmentForm = () => {
    setEnrollmentForm(false);
  };

  const formSchema = yup.object().shape({
    first_name: yup.string().required("Please enter your first name."),
    last_name: yup.string().required("Please enter your last name."),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    dob: yup.date().required("Date of Birth is required"),
    age_restriction: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Required field."),
    us_status: yup.string().oneOf(["yes", "no"]).required("Required field."),
    photo_id: yup.string().oneOf(["yes", "no"]).required("Required field."),
    transportation: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Required field."),
    orientation: yup.string().oneOf(["yes", "no"]).required("Required field."),
    upload_id: yup
      .mixed()
      .required("A file is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 1024 * 1024 * 2; // 2MB maximum file size
      }),
  });

  // Define initial values
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    age_restriction: "", // Default value, you can change it if needed
    us_status: "", // Default value, you can change it if needed
    photo_id: "", // Default value, you can change it if needed
    transportation: "", // Default value, you can change it if needed
    orientation: "", // Default value, you can change it if needed
    upload_id: null, // Initialize the file field with null
  };

  // Define the submit function
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    formik.resetForm();
    setEnrollmentForm(false);
    // You can send the form data to your server or perform any other actions
  };

  // Create a Formik instance
  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="EnrollmentForm">
      <div className="enrollment-form-wrapper">
        <h2>Pre-Approval Form</h2>
        <h4>Enroll Now!</h4>
        <p>
          Pre-approval form for enrollment in San Bernardino Cuts accredited
          Barbering and Cosmetology institute
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-field">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="error">{formik.errors.first_name}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="error">{formik.errors.last_name}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="dob">Birth Date</label>
            <input
              type="date"
              id="dob"
              name="dob"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="error">{formik.errors.dob}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label>Are you 16 years old or older?</label>
            <div>
              <input
                type="radio"
                id="age_restriction_yes"
                name="age_restriction"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.age_restriction === "yes"}
              />
              <label htmlFor="age_restriction_yes">Yes</label>
              <div>
                <input
                  type="radio"
                  id="age_restriction_no"
                  name="age_restriction"
                  value="no"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.age_restriction === "no"}
                />
                <label htmlFor="age_restriction_no">No</label>
              </div>
            </div>
          </div>
          <div className="input-field">
            <label>Are you a US Citizen or Resident?</label>
            <div>
              <input
                type="radio"
                id="us_status_yes"
                name="us_status"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.us_status === "yes"}
              />
              <label htmlFor="us_status_yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="us_status_no"
                name="us_status"
                value="no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.us_status === "no"}
              />
              <label htmlFor="us_status_no">No</label>
            </div>
            {formik.touched.us_status && formik.errors.us_status ? (
              <div className="error">{formik.errors.us_status}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label>Do you have a valid government-issues photo ID?</label>
            <div>
              <input
                type="radio"
                id="photo_id_yes"
                name="photo_id"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.photo_id === "yes"}
              />
              <label htmlFor="photo_id_yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="photo_id_no"
                name="photo_id"
                value="no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.photo_id === "no"}
              />
              <label htmlFor="photo_id_no">No</label>
            </div>
            {formik.touched.photo_id && formik.errors.photo_id ? (
              <div className="error">{formik.errors.photo_id}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label>Do you have reliable transportation to school?</label>
            <div>
              <input
                type="radio"
                id="transportation_yes"
                name="transportation"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.transportation === "yes"}
              />
              <label htmlFor="transportation_yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="transportation_no"
                name="transportation"
                value="no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.transportation === "no"}
              />
              <label htmlFor="transportation_no">No</label>
            </div>
            {formik.touched.transportation && formik.errors.transportation ? (
              <div className="error">{formik.errors.transportation}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label>Able to complete orientation prior to starting?</label>
            <div>
              <input
                type="radio"
                id="orientation_yes"
                name="orientation"
                value="yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.orientation === "yes"}
              />
              <label htmlFor="orientation_yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="orientation_no"
                name="orientation"
                value="no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.orientation === "no"}
              />
              <label htmlFor="orientation_no">No</label>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="upload_id">Upload ID</label>
            <input
              type="file"
              id="upload_id"
              name="upload_id"
              onChange={(event) =>
                formik.setFieldValue("upload_id", event.target.files[0])
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.upload_id && formik.errors.upload_id ? (
              <div className="error">{formik.errors.upload_id}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
        <Button text="Close" onClick={handleCloseEnrollmentForm} />
      </div>
    </div>
  );
}

export default EnrollmentForm