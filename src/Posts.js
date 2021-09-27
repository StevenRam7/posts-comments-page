import { useEffect } from "react";
//unused

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