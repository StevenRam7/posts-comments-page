import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [buttonText, setButtonText] = useState("Show Comments");
  const [postID, setPostID] = useState("");

  const commentHandler = (event) => {
    event.preventDefault();
    
    if (buttonText === "Show Comments") {
      setButtonText("Hide Comments");
      
    }
    if (buttonText === "Hide Comments") {
      setButtonText("Show Comments")
      
    }
  }

  const postPage = "http://jsonplaceholder.typicode.com/posts";
  const commentPage = "http://jsonplaceholder.typicode.com/comments";
    
 useEffect (() => {
   const abortController = new AbortController();
   async function loadPosts() {
     try{
      const response = await fetch(postPage, { signal: abortController.signal });
      const postsFromAPI = await response.json();
      setPosts(postsFromAPI);
     } catch(error) {
       return <p>Page could not load!</p>
     }
      
    }
     loadPosts();
     return () => {
       abortController.abort();
     }     
 }, []);

useEffect (() => {
  async function loadComments() {
     const response = await fetch(commentPage);
     const commentsFromAPI = await response.json();
     setComments(commentsFromAPI);
   }
    loadComments();     
}, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Posts {"&"} Comments</h1>
      </div>
      <div className="Post-list">
      {posts.map((post) => (
          <div className="post-and-coms">
          <h3>{post.title.toUpperCase()}</h3><p>{"Post ID " + "#" + post.id}</p><p>{post.body}</p>
          <button type="button" class="btn btn-primary btn-outline-dark" onClick={() => setPostID(post.id), commentHandler}>{buttonText}</button>
          {buttonText === "Hide Comments" && comments.filter(comment => comment.postId === post.id).map((comment) => (
            <div className="comment">
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <p>{"Email: " + comment.email}</p>
            </div>
          ))}
          </div>
       )
             
       )}
     </div>
      
    </div>
  );
}

export default App;
