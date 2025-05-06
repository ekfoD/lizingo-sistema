import { Container, Row, Col, Button } from "react-bootstrap";
import { InspectReq } from "./InspectReq";
import { useState } from "react";

export function Request({
  moneyAmount,
  duration,
  contribution,
  name,
  onDelete,
  status,
}) {
  const statusMessages = {
    2: "In progress",
    0: "Approved",
    1: "Rejected",
  };

  // Usage
  const message = statusMessages[status] || "Unknown status";

  const [show, setShow] = useState(false);
  return (
    <Container>
      {show ? (
        <InspectReq
          setShow={setShow}
          show={show}
          moneyAmount={moneyAmount}
          duration={duration}
          contribution={contribution}
          name={name}
        />
      ) : null}
      <Row>
        <Col>
          <p>{name}</p>
        </Col>
        <Col className="d-flex align-content-center justify-content-end">
          <p>{message}</p>
        </Col>
        <Col className="d-flex align-content-end justify-content-end">
          <Button className="btn-danger" onClick={onDelete}>
            Atšaukti
          </Button>
        </Col>
        <Col>
          <Button className="btn-success" onClick={() => setShow(true)}>
            Peržiūrėti
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
