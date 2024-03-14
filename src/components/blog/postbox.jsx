// import Pagination_Data from "@components/common/pagination/pagination-data";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const Postbox = () => {
//   const [blogs, setBlogs] = useState([])

//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}blog/all-blog`)
//       .then((res) => {
//         setBlogs(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div className="col-xxl-8 col-xl-7 col-lg-7">
//       <div className="postbox__wrapper">
//         {blogs &&
//           blogs.slice(6, 9).map((item) => (
//             <div className="postbox__item mb-60 wow fadeInUp" key={item._id}>
//               <div className="postbox__thumb mb-30">
//                 <Link href={`/blog-details/${item._id}`}>
//                   <Image
//                     src={item.image}
//                     width={500}
//                     height={500}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="img not found"
//                   />
//                 </Link>
//               </div>
//               <div className="postbox__content">
//                 <div className="postbox__meta mb-20">
//                   <span>
//                     <Link href="">{item.subTitle}</Link>
//                   </span>
//                   <span>{item.date}</span>
//                 </div>
//                 <h3 className="postbox__title ">
//                   <Link href={`/blog-details/${item._id}`}>{item.title}</Link>
//                 </h3>
//                 <div className="postbox__text ">
//                   <p>{item.description}</p>
//                 </div>
//                 <div className="col-xl-12">
//                   <Link
//                     href={`/blog-details/${item._id}`}
//                     className="fm-submit-btn "
//                   >
//                     Read Blog post
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         <Pagination_Data />
//       </div>
//     </div>
//   );
// };

// export default Postbox;

// import Pagination_Data from "@components/common/pagination/pagination-data";
// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const Postbox = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}job/all-jobs`)
//       .then((res) => {
//         setJobs(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="col-xxl-8 col-xl-7 col-lg-7">
//       <div className="postbox__wrapper">
//         {jobs &&
//           jobs.slice(0, 3).map((job) => (
//             <div className="postbox__item mb-60 wow fadeInUp" key={job._id}>
//               <div className="postbox__content">
//                 <h3 className="postbox__title">
//                   {job.title}
//                 </h3>
//                 <div className="postbox__text">
//                   <p>{job.description}</p>
//                 </div>
//                 <div className="col-xl-12">
//                   <Link
//                     href={`/apply-now/${job._id}`}
//                     className="fm-submit-btn"
//                   >
//                     Apply
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         <Pagination_Data />
//       </div>
//     </div>
//   );
// };

// export default Postbox;
import React, { useState } from "react";

const Postbox = () => {
  const sampleData = [
    {
      
        _id: "1",
        image: "path/to/image1.jpg",
        subTitle: "Subtitle 1",
        date: "2024-01-12",
        title: "Full-Stack Developer",
        description: (
          <>
            - Proven experience as a Full Stack Developer. <br />
            - Proficient in front-end (HTML, CSS, JavaScript) and back-end (Node.js, Python, Ruby). <br />
            - Database experience with MySQL, MongoDB, and PostgreSQL. <br />
            - Familiarity with cloud platforms such as AWS, Azure, and Google Cloud. <br />
            - Strong problem-solving skills. <br />
            - Excellent communication and collaboration.
          </>
        ),
      },
      
    {
      _id: "2",
      image: "path/to/image2.jpg",
      subTitle: "Subtitle 2",
      date: "2024-01-13",
      title: "Network Engineer",
      description: (
        <>
          - Proven experience as a Network Engineer.<br/>
          - Strong knowledge of networking protocols and technologies.<br/>
          - Experience with Cisco, Juniper, or other networking equipment.<br/>
          - Excellent problem-solving and communication skills.<br/>
          - Relevant certifications (e.g., CCNA, CCNP) are a plus.<br/>
        </>
      ),
    },
    {
      _id: "3",
      image: "path/to/image2.jpg",
      subTitle: "Subtitle 2",
      date: "2024-01-13",
      title: "HTML Developer",
      description: (
        <>
          - Proven experience as an HTML Developer or similar role.<br/>
          - Strong proficiency in HTML5, CSS3, and JavaScript.<br/>
          - Familiarity with responsive design principles.<br/>
          - Experience with version control systems (e.g., Git).<br/>
          - Good understanding of web performance optimization.<br/>
        </>
      
      ),
    },
  ];

  const [blogs, setBlogs] = useState(sampleData);

  return (
    <>
      <div className="col-xxl-8 col-xl-7 col-lg-7">
        <div className="postbox__wrapper">
          {blogs.map((item) => (
            <div className="postbox__item mb-60" key={item._id}>
              {/* <img src={item.image} alt="img not found" /> */}
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-instructions">
        <p>
          Interested candidates are invited to send their resumes to{" "}
          <a href="mailto:contact@camblissstudio.com">contact@camblissstudio.com</a>.
        </p>
      </div>
    </>
  );
};

export default Postbox;