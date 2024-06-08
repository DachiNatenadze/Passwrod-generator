import React, { useState } from "react";
import StrengthMeter from "./Strength";

export interface StrengthMeterProps {
  checkBoxes: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  setCheckboxes: React.Dispatch<
    React.SetStateAction<{
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
    }>
  >;
}

const CheckboxList: React.FC<StrengthMeterProps> = ({
  checkBoxes,
  setCheckboxes,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  flex-col bg-gray-900 text-gray-200">
        <div className="space-y-4">
          <label className="flex  flex-col items-center space-x-3">
            <input
              type="checkbox"
              name="uppercase"
              checked={checkBoxes.uppercase}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span
              className={`text-lg ${
                checkBoxes.uppercase ? "text-green-500" : ""
              }`}>
              Include Uppercase Letters
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="lowercase"
              checked={checkBoxes.lowercase}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span
              className={`text-lg ${
                checkBoxes.lowercase ? "text-green-500" : ""
              }`}>
              Include Lowercase Letters
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="numbers"
              checked={checkBoxes.numbers}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span
              className={`text-lg ${
                checkBoxes.numbers ? "text-green-500" : ""
              }`}>
              Include Numbers
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="symbols"
              checked={checkBoxes.symbols}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <span
              className={`text-lg ${
                checkBoxes.symbols ? "text-green-500" : ""
              }`}>
              Include Symbols
            </span>
          </label>
        </div>
      </div>
      <StrengthMeter
        checkBoxes={checkBoxes}
        setCheckboxes={setCheckboxes}
        RangeValue={RangeValue}
        handleChange={handleChange}
      />
    </>
  );
};

export default CheckboxList;
