import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);

  const getBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      getBlogs();
    } catch (error) {
      console.error(`Error deleting blog with id ${id}:`, error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log("Blogs:", blogs);

  return (
    <div>
      <BlogForm blog={blog} setBlog={setBlog} getBlogs={getBlogs} />
      <BlogList blogs={blogs} setBlog={setBlog} deleteBlog={deleteBlog} />
    </div>
  );
};

export default App;
