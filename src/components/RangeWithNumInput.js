import Form from "react-bootstrap/Form";

export function RangeWithNumInput({
  inputValue,
  setInputValue,
  rangeValue,
  setRangeValue,
  rangeMinValue,
  rangeMaxValue,
  rangeStep,
}) {
  return (
    <>
      <Form.Control
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => setRangeValue(e.target.value)}
      />
      <Form.Range
        min={rangeMinValue}
        max={rangeMaxValue}
        step={rangeStep}
        className="mt-0 pt-0"
        value={rangeValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setRangeValue(e.target.value);
        }}
      />
    </>
  );
}
