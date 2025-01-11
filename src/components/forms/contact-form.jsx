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
      service: "",
      subject: "",
      msg: "",
    },
    validationSchema: contact_schema,
    onSubmit: () => {
      const mailtoLink = `mailto:contact@camblissstudio.com?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nPhone Number: ${values.phnNo}\nService: ${values.service}\nMessage: ${values.msg}`
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
            className="form-control"
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
            className="form-control"
          />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <input
            name="phnNo"
            value={values.phnNo}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your phone number"
            id="phnNo"
            className="form-control"
          />
          {touched.phnNo && <ErrorMsg error={errors.phnNo} />}
        </div>
        <div className="col-xl-6 col-lg-6">
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            id="service"
            className="form-select"
            style={{
              width: "100%",
              height: "50px",
              fontSize: "16px",
              lineHeight: "50px",
              padding: "0 20px",
              border: "1px solid var(--clr-border-6)",
              marginBottom: "30px",
              color: "var(--clr-common-black)",
            }}
          >
            <option value="">Select your service</option>
            <option value="Service 1">Website Design & Development</option>
            <option value="Service 2">Branding & Creative services</option>
            <option value="Service 3">Animation</option>
            <option value="Service 4">UI/UX</option>
            <option value="Service 5">Advertisement</option>
            <option value="Service 6">Interior Designing</option>
            <option value="Service 7">Visual Production</option>
            <option value="Service 8">Integrated Cloud Bussiness Solutions</option>
          </select>
          {touched.service && <ErrorMsg error={errors.service} />}
        </div>
      </div>
      {/* Business Name field */}
      <div className="col-xl-12">
        <input
          name="businessName"
          value={values.businessName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Your Business Name"
          id="businessName"
          className="form-control"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "16px",
            lineHeight: "50px",
            padding: "0 20px",
            border: "1px solid var(--clr-border-6)",
            marginBottom: "30px",
            color: "var(--clr-common-black)",
          }}
        />
      </div>


      <div className="col-xl-12">
        <input
          type="text"
          placeholder="Subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.subject}
          id="subject"
          name="subject"
          className="form-control"
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
          className="form-control"
        ></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>

      <div className="col-xl-12">
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
