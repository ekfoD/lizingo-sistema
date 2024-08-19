import Form from "react-bootstrap/Form";

export function RangeWithNumInput({
  inputValue,
  setInputValue,
  rangeValue,
  setRangeValue,
  rangeMinValue,
  rangeMaxValue,
  setOtherThings,
  rangeStep,
}) {
  return (
    <>
      <Form.Control
        type="number"
        value={inputValue}
        min={rangeMinValue}
        max={rangeMaxValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => {
          if (inputValue < rangeMinValue) {
            setInputValue(rangeMinValue);
            setRangeValue(rangeMinValue);
            setOtherThings(rangeMinValue);
          } else if (inputValue > rangeMaxValue) {
            setInputValue(rangeMaxValue);
            setRangeValue(rangeMaxValue);
            setOtherThings(rangeMaxValue);
          } else {
            setInputValue(e.target.value);
            setRangeValue(e.target.value);
            setOtherThings(e.target.value);
          }
        }}
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
          setOtherThings(e.target.value);
        }}
      />
    </>
  );
}
