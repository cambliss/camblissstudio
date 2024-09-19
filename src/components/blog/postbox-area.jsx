import React from "react";
import Postbox from "./postbox";
<<<<<<< HEAD
import BlogSidebar from "./blog-sidebar";
=======
// import BlogSidebar from "./blog-sidebar";
>>>>>>> master

const PostBoxArea = () => {
  return (
    <section className="postbox__area section-spacing-bottom">
      <div className="container">
        <div className="row g-40">
          <Postbox />
          {/* <BlogSidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default PostBoxArea;
