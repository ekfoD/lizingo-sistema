import { Request } from "./Request";

import { Container, ListGroup } from "react-bootstrap";

import "../styles/ContainerSize.css";

export function RequestList() {
  return (
    <div>
      <Container className="Container-sizing">
        <p className="display-5">Paraiškų sąrašas:</p>

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
