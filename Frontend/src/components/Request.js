import { Container, Row, Col, Button } from "react-bootstrap";
import { InspectReq } from "./InspectReq";
import { useState } from "react";

export function Request({ moneyAmount, duration, contribution, name }) {
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
          <p>vardas</p>
        </Col>
        <Col className="d-flex align-content-center justify-content-end">
          <p>status</p>
        </Col>
        <Col className="d-flex align-content-end justify-content-end">
          <Button className="btn-danger">Atšaukti</Button>
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
