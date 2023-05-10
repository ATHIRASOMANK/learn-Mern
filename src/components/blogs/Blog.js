import React, { useState, useEffect } from "react";
import "../style/blog.css";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../modal/modal";
import axios from "axios";
import BlogSideBody from "./blog-side-body";
import ResponsiveAppBar from "../modal/navebar";



const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [testData, setTestData] = useState([]);
  const [blogData, setBlogData] = useState({});

  console.log(blogData);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/getallblogs")
      .then(function (response) {
        setTestData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-blog">
      <div>
        <header>
          <ResponsiveAppBar/>
        </header>
      </div>
      <div>
        <button
          className="blog-bt1"
          onClick={() => {
            setIsOpen(true);
            setIsOpenModal(true);
          }}
        >
          Create
        </button>
      </div>

      <br />

      <div className="main-list">
        <div className="blog-list">
          <ul>
            <div className="spee">
              <li className="titlelist">
                {testData.map((blog, index) => (
                  <div key={index}>
                    <h2 className="h2"
                      onClick={() =>
                        setBlogData({
                          title: blog.title,
                          description: blog.description,
                          content: blog.content,
                          time: blog.timestamp,
                        })
                      }
                    >
                      {blog.title}
                    </h2>
                    <h2 className="cont-h2">{blog.content}</h2>
                  </div>
                ))}
              </li>
            </div>
          </ul>
        </div>
        <div className="blog-list2">
        { blogData && <BlogSideBody blogdata={blogData} /> }
        </div>
      </div>
      <ModalComponent
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      /> 
    </div>
  );
};

export default Blog;
 