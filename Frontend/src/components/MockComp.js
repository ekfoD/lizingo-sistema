import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function MockComp() {
  const [posts, setPosts] = useState([]);
  const [weathers, setWeathers] = useState([]);

  const getWeathers = () => {
    fetch("http://localhost:5140/weatherforecast/")
      .then((response) => response.json())
      .then((data) => setWeathers(data));
  };

  //   const addPost = (title, body) => {
  //     fetch("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: title,
  //         body: body,
  //         userId: Math.random().toString(36).slice(2),
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setPosts((prevPosts) => [data, ...prevPosts]));
  //   };

  const handleAddRequest = (e) => {
    e.preventDefault();
    //addPost("yeet", "yaa");
  };

  useEffect(() => {
    getWeathers();
  }, []);

  return (
    <>
      <h1>okay mock stuff works</h1>
      <Button onClick={(e) => handleAddRequest(e)}>click meeee</Button>

      {weathers.map((weather) => {
        return (
          <>
            <h5>{weather.TemperatureC}</h5>
            <p5>{weather.Summary}</p5>
          </>
        );
      })}
    </>
  );
}
