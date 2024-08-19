import { Col, Form } from "react-bootstrap";

export function RequestForm2ndRow({
  contribution,
  contributionPercent,
  setContribution,
  setContributionPercent,
  handleContributionInputChanges,
  handleContributionPercentChanges,
}) {
  return (
    <>
      <Col md={6}>
        <Form.Group>
          <Form.Label>Pradinis įnašas</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            onBlur={(e) => handleContributionInputChanges(e.target.value)}
          />
          <Form.Text>10% automobilio sumos</Form.Text>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group>
          <Form.Label>Pradinis įnašas %</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={contributionPercent}
            onChange={(e) => setContributionPercent(e.target.value)}
            onBlur={(e) => handleContributionPercentChanges(e.target.value)}
          />
        </Form.Group>
      </Col>
    </>
  );
}
