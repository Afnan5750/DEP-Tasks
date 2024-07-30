import React from "react";
import "./styles/blogList.css";

const BlogList = ({ blogs, setBlog, deleteBlog }) => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
    }
  };

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-item" key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => setBlog(blog)}>Edit</button>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
