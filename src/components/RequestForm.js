import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/ContainerSize.css";

export function RequestForm() {
  return (
    <div>
      <Container className="Container-sizing">
        <p class="display-5">Lizingo forma:</p>
        <p class="mb-5">
          Užpildykite šią formą ir laukite mūsų atsakymo. Peržiūrėję jūsų
          užklausą, pakeisime paraiškos statusą skiltyje{" "}
          <strong>Paraiškos</strong>{" "}
        </p>

        <Form>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Mašinos kaina</Form.Label>
                <Form.Control type="number" placeholder="0" />
                <Form.Text>nuo 7000 Eur. iki 169000 Eur.</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Laikotarpis</Form.Label>
                <Form.Control type="number" placeholder="0" />
                <Form.Text>nuo 6 mėn. iki 96 mėn.</Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pradinis įnašas</Form.Label>
                <Form.Control type="number" placeholder="0" />
                <Form.Text>10% automobilio sumos</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pradinis įnašas %</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md="auto">
              <Button>Pateikti</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
