import { RangeWithNumInput } from "./RangeWithNumInput";
import { RequestForm2ndRow } from "./RequestForm2ndRow";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

import { toast } from "react-toastify";

import "../styles/ContainerSize.css";
import { useState } from "react";

export function RequestForm() {
  const minPriceSliderValue = 7000;
  const maxPriceSliderValue = 169000;
  const [priceSliderValue, setPriceSliderValue] = useState(minPriceSliderValue);
  const [priceInputValue, setPriceInputValue] = useState(minPriceSliderValue);

  const minMonthSliderValue = 6;
  const maxMonthSliderValue = 96;
  const [monthSliderValue, setMonthSliderValue] = useState(minMonthSliderValue);
  const [monthInputValue, setMonthInputValue] = useState(minMonthSliderValue);

  const [contribution, setContribution] = useState(0);
  const [contributionPercent, setContributionPercent] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    // to-do. fix this shit grr
    setMonthlyPayment(priceSliderValue / monthSliderValue);
  };

  const handleMoneyInputField = (value) => {
    calculateMonthlyPayment(); // cia problema nes ten persiuncia vienu senesni value. ir del to preliminari menesio imoka yra netiksli
    // o tie kiti tikslus (praidinis inasas n pradinis inasaas %)
    setContributionPercent((100 * contribution) / value);
    handleContributionField(contribution, value);
  };

  const handleContributionField = (contributionVal, priceInputVal) => {
    if (contributionVal * 10 < priceInputVal) {
      setContribution(priceInputVal * 0.1);
      setContributionPercent(10);
    } else if (contributionVal > priceInputVal * 0.9) {
      setContribution(priceInputVal * 0.9);
      setContributionPercent(90);
    }
  };

  const handleContributionInputChanges = (val) => {
    setContribution(val);
    setContributionPercent((100 * val) / priceInputValue);
    handleContributionField(val, priceInputValue);
  };

  const handleContributionPercentChanges = (val) => {
    if (val < 10) {
      setContribution(priceInputValue * 0.1);
      setContributionPercent(10);
      return;
    } else if (val > 90) {
      setContribution(priceInputValue * 0.9);
      setContributionPercent(90);
      return;
    }
    setContribution((priceInputValue * val) / 100);
    setContributionPercent(val);
    handleContributionField(contribution, priceInputValue);
  };

  const addRequest = async (price, timeSpan, downPayment) => {
    try {
      const response = await fetch("http://localhost:5039/postRequest/", {
        method: "POST",
        body: JSON.stringify({
          price: price,
          timeSpan: timeSpan,
          downPayment: downPayment,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) throw new Error("Server error");
      toast.success("Paraiška priimta");
    } catch (error) {
      toast.error("Kažkas negerai! Paraiška nebuvo priimta");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest(priceInputValue, monthSliderValue, contribution);
  };

  return (
    <div>
      <Container className="Container-sizing">
        <p class="display-5">Lizingo forma:</p>
        <p class="mb-5">
          Užpildykite šią formą ir laukite mūsų atsakymo. Peržiūrėję jūsų
          užklausą, pakeisime paraiškos statusą skiltyje{" "}
          <strong>Paraiškos</strong>{" "}
        </p>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Mašinos kaina</Form.Label>
                <RangeWithNumInput
                  inputValue={priceInputValue}
                  setInputValue={setPriceInputValue}
                  rangeValue={priceSliderValue}
                  setRangeValue={setPriceSliderValue}
                  rangeMinValue={minPriceSliderValue}
                  rangeMaxValue={maxPriceSliderValue}
                  setOtherThings={handleMoneyInputField}
                  rangeStep={100}
                />
                <Form.Text>nuo 7000 Eur. iki 169000 Eur.</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Laikotarpis</Form.Label>
                <RangeWithNumInput
                  inputValue={monthInputValue}
                  setInputValue={setMonthInputValue}
                  rangeValue={monthSliderValue}
                  setRangeValue={setMonthSliderValue}
                  rangeMinValue={minMonthSliderValue}
                  rangeMaxValue={maxMonthSliderValue}
                  setOtherThings={calculateMonthlyPayment}
                  rangeStep={1}
                />
                <Form.Text>nuo 6 mėn. iki 96 mėn.</Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5">
            <RequestForm2ndRow
              contribution={contribution}
              contributionPercent={contributionPercent}
              setContribution={setContribution}
              setContributionPercent={setContributionPercent}
              handleContributionInputChanges={handleContributionInputChanges}
              handleContributionPercentChanges={
                handleContributionPercentChanges
              }
            />
          </Row>

          <Row>
            <Col className="d-flex justify-content-center">
              <Form.Group>
                <Form.Label>Preliminari mėnesio įmoka</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={monthlyPayment}
                  disabled
                  readOnly
                />
              </Form.Group>
            </Col>

            <Col className="d-flex justify-content-center align-items-end">
              <Button size="md" variant="primary" type="submit">
                Pateikti
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
