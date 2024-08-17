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
  const handleBlur = () => {
    if (inputValue < rangeMinValue) setInputValue(rangeMinValue);
    else if (inputValue > rangeMaxValue) setInputValue(rangeMaxValue);
  };
  return (
    <>
      <Form.Control
        type="number"
        value={inputValue}
        min={rangeMinValue}
        max={rangeMaxValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => {
          handleBlur();
          setRangeValue(e.target.value);
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
          setOtherThings();
        }}
      />
    </>
  );
}
