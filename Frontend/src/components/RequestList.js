import { Request } from "./Request";

import { Container, ListGroup, Row, Col } from "react-bootstrap";

import "../styles/ContainerSize.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function RequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    try {
      const response = await fetch("http://localhost:5039/getRequests/");

      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      toast.error("Paraiškos nebuvo užkrautos. Atsiprašome!");
    }
  };

  const deleteRequest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5039/deleteRequest/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Server err");
      } else {
        console.log(response);
        toast.success("Sėkmingai atšaukta!");
        setRequests((prevRequests) =>
          prevRequests.filter((r) => r.requestId !== id)
        );
      }
    } catch (error) {
      toast.error("Atšaukimas nepavyko");
    }
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
          {requests.map((request) => {
            return (
              <ListGroup.Item
                key={request.requestId}
                variant="primary"
                className="my-2"
              >
                <Request
                  moneyAmount={request.price}
                  duration={request.timeSpan}
                  contribution={request.downPayment}
                  name={request.requestId}
                  onDelete={() => deleteRequest(request.requestId)}
                  status={request.status}
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
}
