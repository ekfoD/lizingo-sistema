import { Container, Row, Col, Button } from "react-bootstrap";

export function Request({ moneyAmount, duration, contribution }) {
  return (
    <Container>
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
          <Button className="btn-success">Peržiūrėti</Button>
        </Col>
      </Row>
    </Container>
  );
}
