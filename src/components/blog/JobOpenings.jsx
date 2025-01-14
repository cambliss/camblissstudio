import React, { useState } from 'react';

const JobOpeningsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: null });

  const jobs = [
    {
      title: 'Full Stack Developer',
      description: 'Build and maintain web applications using modern frameworks and technologies.',
      keyRoles: ['Develop full-stack applications', 'Work with databases like MySQL, MongoDB', 'Collaborate with design teams', 'Optimize web applications'],
    },
    {
      title: 'Network Engineer',
      description: 'Design, implement, and manage enterprise network infrastructure.',
      keyRoles: ['Configure network routers and switches', 'Manage network traffic', 'Ensure security measures are in place', 'Provide support for network-related issues'],
    },
    {
      title: 'Web Development Intern',
      description: 'Learn and work on web technologies like HTML, CSS, and JavaScript.',
      keyRoles: ['Assist in front-end development', 'Support back-end development', 'Participate in code reviews', 'Learn best practices in web development'],
    },
  ];

  const handleApplyClick = (jobTitle) => {
    console.log('Opening modal for job:', jobTitle); // Debug log
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', resume: null });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('resume', formData.resume);
    try {
      const response = await fetch("http://www.camblissstudio.com/send-resume.php", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
    }
  };


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="container">
      <div className="job-openings-section">
        <h2 className="section-main-title text-white mb-4 text-center">Job Openings</h2><br />
        <div className="row">
          {jobs.map((job, index) => (
            <div className="col-12 mb-4" key={index} style={{ marginBottom: "20px" }}>
              <div className="job-card d-flex align-items-center justify-content-between">
                <div>
                  <h5>{job.title}</h5>
                  <p>{job.description}</p>
                  <ul style={{ listStyleType: "disc !important"}}>
  {job.keyRoles.map((role, roleIndex) => (
    <li key={roleIndex} style={{ marginBottom: "10px" }}>
      {role}
    </li>
  ))}
</ul>

                </div>
                <button className="apply-btn" onClick={() => handleApplyClick(job.title)}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="modal-overlay" style={{ zIndex: 1000 }}>
    <div
      className="modal"
      style={{
        display: 'block',
        opacity: 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1001,
      }}
    >
      <h3>Apply for {selectedJob}</h3>
      <p style={{color:"#000"}}>Welcome To CAMBLISS STUDIO</p>
      <form onSubmit={handleFormSubmit}>
      <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            </div>
            <div className="form-group">
              <label>Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleInputChange}
                required
              />
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
  <button
    type="submit"
    className="btn btn-primary"
    style={{
      backgroundColor: "#ffbd39",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Submit
  </button>
  <button
    onClick={handleCloseModal}
    className="btn btn-primary"
    style={{
      backgroundColor: "#ffbd39",
      color: "#fff",
      border: "none",
      padding: "10px 10px",
      cursor: "pointer",
      textAlign: "center",
    }}
  >
    Close
  </button>
</div>
</form>
    </div>
  </div>
)}

      {/* Styles */}
      <style jsx>{`
        .container {
          
        }
        .job-openings-section {
          padding: 60px 0;
          background-color: #000;
          color: #fff;
        }
       
        .job-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .job-card:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
        }
        .job-card h5 {
          font-size: 18px;
          font-weight: bold;
        }
        .job-card p {
          font-size: 14px;
          margin: 10px 0;
          color: #ccc;
        }
        .apply-btn {
         align-items: center;
    gap: 10px;
    font-weight: 500;
    color: var(--clr-common-white);
    position: relative;
    border: 1px solid #ffbd39;
    padding: 0px 30px;
    font-size: 16px;
    height: 50px;
    background: #ffbd39;
    white-space: nowrap;
        }
        .apply-btn:hover {
          background-color: #ffd966;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1001;
          position: relative;
          opacity: 1;
        }
        .modal h3 {
          margin-bottom: 20px;
          color: #000;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #000;
        }
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .submit-btn {
          background-color: #ffbd39;
          color: #000;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 10px;
        }
        .submit-btn:hover {
          background-color: #ffd966;
        }
        .close-btn {
          background: transparent;
          color: #000;
          border: none;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default JobOpeningsSection;
