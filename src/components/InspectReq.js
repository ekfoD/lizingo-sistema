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
                <p>Numeris:</p>
              </Col>
              <Col>
                <p>Suma:</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Trukmė:</p>
              </Col>

              <Col>
                <p>Pradinis įnašas:</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
