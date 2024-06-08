import React, { useState, useEffect } from "react";
import { StrengthMeterProps } from "./CheckBoxes";

const StrengthMeter: React.FC<StrengthMeterProps> = ({
  checkBoxes,
  setCheckboxes,
}) => {
  const [value, setValue] = useState({ trueCount: 0, falseCount: 0 });

  // Function to calculate the number of true and false values
  const calculateStrength = () => {
    let trueCount = 0;
    let falseCount = 0;
    for (const key in checkBoxes) {
      if (checkBoxes.hasOwnProperty(key)) {
        if (checkBoxes[key]) {
          trueCount++;
        } else {
          falseCount++;
        }
      }
    }
    setValue({ trueCount, falseCount });
  };

  // Use useEffect to recalculate strength whenever checkBoxes change
  useEffect(() => {
    calculateStrength();
  }, [checkBoxes]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <div className="flex items-center space-x-4 gap-4">
        <span className="text-gray-400 text-sm">STRENGTH</span>
        <div className="flex space-x-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 ${
                index < value.trueCount
                  ? "bg-yellow-400"
                  : "border border-gray-500"
              }`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthMeter;
  