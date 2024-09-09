import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function MockComp() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  const addPost = (title, body) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts((prevPosts) => [data, ...prevPosts]));
  };

  const handleAddRequest = (e) => {
    e.preventDefault();
    addPost("yeet", "yaa");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>okay mock stuff works</h1>
      <Button onClick={(e) => handleAddRequest(e)}>click meeee</Button>

      {posts.map((post) => {
        return (
          <>
            <h5>{post.title}</h5>
            <p5>{post.body}</p5>
          </>
        );
      })}
    </>
  );
}
