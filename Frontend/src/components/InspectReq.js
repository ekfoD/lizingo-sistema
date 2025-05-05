import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export function InspectReq({
  setShow,
  show,
  moneyAmount,
  duration,
  contribution,
  name,
}) {
  return (
    <>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Paraiškos duomenys:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <p>Numeris: {name}</p>
              </Col>
              <Col>
                <p>Suma: {moneyAmount}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Trukmė: {duration}</p>
              </Col>

              <Col>
                <p>Pradinis įnašas: {contribution}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
