import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [buttonText, setButtonText] = useState("Show Comments");

  const commentHandler = (event) => {
    event.preventDefault();
    if (buttonText === "Show Comments") {
      setButtonText("Hide Comments");
      
    }
    if (buttonText === "Hide Comments") {
      setButtonText("Show Comments")
      setComments([]);
    }
  }

  //fix button so it still works after first few clicks

  const postPage = "http://jsonplaceholder.typicode.com/posts";
  const commentPage = "http://jsonplaceholder.typicode.com/comments";
    
 useEffect (() => {
   async function loadPosts() {
      const response = await fetch(postPage);
      const postsFromAPI = await response.json();
      setPosts(postsFromAPI);
    }
     loadPosts();     
 }, []);

useEffect (() => {
  //const Abort = new AbortController;
  async function loadComment() {
     const response = await fetch(commentPage);
     const commentsFromAPI = await response.json();
     setComments(commentsFromAPI);
   }
    loadComment();     

    //return () => Abort.abort();
}, [commentHandler]);

  return (
    <div className="App">
      <div className="header">
        <h1>Posts {"&"} Comments</h1>
      </div>
      <div className="Post-list">
      {posts.map((post) => (
          <>
          <h3>{post.title.toUpperCase()}</h3><p>{"Post ID# " + post.id}</p><p>{post.body}</p>
          <button onClick={commentHandler}>{buttonText}</button>
          {comments.map((comment) => (
            <div className="comment">
            <h4>{post.id === comment.id ? comment.name : null}</h4>
            <p>{post.id === comment.id ? comment.body : null}</p>
            <p>{post.id === comment.id ? "Email: " + comment.email : null}</p>
            </div>
          ))}
          </>
       )
             
       )}
     </div>
      
    </div>
  );
}

export default App;
