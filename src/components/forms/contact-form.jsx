import React from "react";
import { useFormik } from "formik";
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { handleChange, handleBlur, errors, values, touched, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phnNo: "",
      subject: "",
      msg: "",
    },
    validationSchema: contact_schema,
    onSubmit: () => {
      const mailtoLink = `mailto:contact@camblissstudio.com?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nPhone Number: ${values.phnNo}\nMessage: ${values.msg}`
      )}`;
      

      window.location.href = mailtoLink;

      toast.success("Contact Successfully");
    },
  });

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your name"
            id="name"
          />
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>
        <div className="col-xl-6 col-lg-6">
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>

      <div className="col-xl-6 col-lg-6">
        <input
          name="phnNo"
          value={values.phnNo}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter your phone number"
          id="phnNo"
        />
        {touched.phnNo && <ErrorMsg error={errors.phnNo} />}
      </div>

      <div className="col-xl-12">
        <input
          type="text"
          placeholder="Subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.subject}
          id="text"
          name="subject"
        />
      </div>

      <div className="col-xl-12">
        <textarea
          name="msg"
          value={values.msg}
          onChange={handleChange}
          onBlur={handleBlur}
          id="msg"
          placeholder="Type your message..."
        ></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>

      <div className="col-xl-12">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
