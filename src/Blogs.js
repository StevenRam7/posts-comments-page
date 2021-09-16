import React from "react";

function BlogInfo({ blogs, setBlogs, deleteHandler, retrieveHandler }) {

    return (
        <div className="blogs">
            {blogs.map((blog) => (
            <div className="info" >
                <h1>Title: {blog.title}</h1>
                    <p>Author: {"Mr. " + blog.author.toUpperCase()}</p>
                    <p>Author ID: {blog.id}</p>
                    <p>Editor: {blog.author === "mario" ? "Jess" : "Bob"}</p>
            </div>
    ))}
    <button onClick={retrieveHandler}>Retrieve</button>
    <button onClick={deleteHandler}>Delete</button>
    
        </div>
      
    )
};

export default BlogInfo;