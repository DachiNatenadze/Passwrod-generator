// Slider.tsx
import React, { useState } from "react";
import CheckboxList from "./CheckBoxes";
import "./slider.css";

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>({
    value: Number,
  });
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <CheckboxList
        checkBoxes={checkboxes}
        setCheckboxes={setCheckboxes}
        value={value}
        handleChange={handleChange}
      />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-xl p-4">
          <input
            type="range"
            min="0"
            max="15"
            value={value}
            onChange={handleChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb"
            style={{ backgroundSize: `${value}% 100%` }}
          />
          <h1>{value}</h1>
        </div>
      </div>
    </>
  );
};

export default Slider;
