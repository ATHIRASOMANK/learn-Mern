import React from "react";

const BlogSideBody = ({ blogdata }) => {

  return (
    <div>
      {blogdata.title}
      <br/>
      {blogdata.description} {blogdata.timestamp}
      <br/>
      {blogdata.content}

    </div>
  );
};

export default BlogSideBody;
