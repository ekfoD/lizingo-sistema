import { Request } from "./Request";

import { Container, ListGroup, Row, Col } from "react-bootstrap";

import "../styles/ContainerSize.css";

export function RequestList() {
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
          <ListGroup.Item variant="primary" className="my-2">
            {" "}
            <Request moneyAmount={100} duration={10} contribution={10} />
          </ListGroup.Item>
          <ListGroup.Item variant="primary" className="my-2">
            <Request />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}
