import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/blogForm.css";

const BlogForm = ({ blog, setBlog, getBlogs }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (blog) {
        await axios.put(`http://localhost:5000/api/blogs/${blog._id}`, {
          title,
          content,
        });
      } else {
        await axios.post("http://localhost:5000/api/blogs", { title, content });
      }
      setBlog(null);
      setTitle("");
      setContent("");
      getBlogs();
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>{blog ? "Edit Blog" : "Create New Blog"}</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Content:</label>
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-submit">
        {blog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
