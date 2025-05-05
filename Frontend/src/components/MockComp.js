import { useState } from "react";
import { Button } from "react-bootstrap";

export function MockComp() {
  const [requests, setRequests] = useState([]);

  const addRequest = (price, timeSpan, downPayment) => {
    fetch("http://localhost:5039/postRequest/", {
      method: "POST",
      body: JSON.stringify({
        price: price,
        timeSpan: timeSpan,
        downPayment: downPayment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setRequests((prevRequests) => [data, ...prevRequests]));
  };

  const handleAddRequest = (e) => {
    e.preventDefault();
    addRequest(6900, 6, 600);
  };

  // useEffect(() => {
  //   getWeathers();
  // }, []);

  return (
    <>
      <Button onClick={(e) => handleAddRequest(e)}>click meeee</Button>

      {requests.map((request) => {
        return (
          <>
            <h5>{request.Status}</h5>
            <h5>{request.Price}</h5>
            <h5>{request.TimeSpan}</h5>
            <h5>{request.DownPayment}</h5>
          </>
        );
      })}
    </>
  );
}
