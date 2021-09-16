import React from "react";
import { useEffect } from "react";

function Posts() {
    const postPage = "http://jsonplaceholder.typicode.com/posts";
    
 useEffect(() => {
     fetch(postPage)
     .then ((response) => {
         return response.json;
     })
 }, []);
}

export default Posts;