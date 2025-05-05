import { Request } from "./Request";

import { Container, ListGroup, Row, Col } from "react-bootstrap";

import "../styles/ContainerSize.css";
import { useEffect, useState } from "react";

export function RequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  // a func to get the shit
  const getRequests = async () => {
    fetch("http://localhost:5039/getRequests/")
      .then((response) => response.json())
      .then((data) => {
        //        setRequests((prevRequests) => [data, ...prevRequests]);
        setRequests(data);
      });
  };

  return (
    <div>
      <Container className="Container-sizing">
        <p className="display-5">Paraiškų sąrašas:</p>
        <Row>
          <Col className="ms-3">
            <strong>Numeris:</strong>
          </Col>
          <Col className="d-flex align-content-start justify-content- ms-5 ps-4">
            <strong>Statusas:</strong>
          </Col>
          <Col className="ms-0">
            <strong>Veiksmai:</strong>
          </Col>
        </Row>

        <ListGroup>
          {requests.map((request, idx) => {
            return (
              <ListGroup.Item key={idx} variant="primary" className="my-2">
                <h1>hey</h1>
                <Request
                  moneyAmount={request.price}
                  duration={request.timeSpan}
                  contribution={request.downPayment}
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
}
