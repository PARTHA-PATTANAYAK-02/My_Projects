import React, { useState, useEffect } from "react";
import "./index.css";
export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("00");
  const [color, setColor] = useState(
    "linear-gradient(225deg, #CBBACC 0%, #2580B3 100%)"
  );
  const [message, setMessage] = useState("NaN");
  useEffect(() => {
    if (height !== "" && weight !== "") {
      const calculateHeight = Number(height) / 100;
      const calculateBmi = (
        weight /
        (calculateHeight * calculateHeight)
      ).toFixed(1);
      setBmi(calculateBmi);
    } else {
      setBmi("00");
      setColor("linear-gradient(225deg, #CBBACC 0%, #2580B3 100%)");
    }
  }, [height, weight]);
  useEffect(() => {
    if (bmi < 18.5 && bmi > 0) {
      setColor("#FEB132");
      setMessage("Underweight");
    } else if (bmi >= 18.5 && bmi <= 25) {
      setColor("#30A232");
      setMessage("Normal weight");
    } else if (bmi > 25 && bmi <= 30) {
      setColor("#E96024");
      setMessage("Overweight");
    } else if (bmi > 30) {
      setColor("#C0101B");
      setMessage("Obese");
    } else {
      setColor(
        "background-image: linear-gradient(225deg, #CBBACC 0%, #2580B3 100%)"
      );
    }
  }, [bmi]);
  return (
    <div className="main">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="height field">
          <p>Height(cm) - </p>
          <div className="input">
            <button
              className="H-dec"
              onClick={() =>
                height > 1 ? setHeight(Number(height) - 1) : setHeight("")
              }
            >
              -
            </button>
            <input
              type="number"
              value={height}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue === "" || Number(newValue) >= 0) {
                  setHeight(newValue.replace(/^0+/, ""));
                }
              }}
              placeholder="Enter"
            />
            <button
              className="H-inc"
              onClick={() =>
                height < 200 ? setHeight(Number(height) + 1) : ""
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="width field">
          <p>Weight(kg) - </p>
          <div className="input">
            <button
              className="W-dec"
              onClick={() =>
                weight > 1 ? setWeight(Number(weight) - 1) : setWeight("")
              }
            >
              -
            </button>
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue === "" || Number(newValue) >= 0) {
                  setWeight(newValue.replace(/^0+/, ""));
                }
              }}
              placeholder="Enter"
            />

            <button
              className="W-inc"
              onClick={() =>
                weight < 300 ? setWeight(Number(weight) + 1) : ""
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="result">
          <p>Your BMI : </p>
          <p style={{ background: color }}>{bmi === "NaN" ? "00" : bmi}</p>
          <p style={{ background: color }}>{message}</p>
        </div>
      </div>
      <div className="banner">
        <div>
          <h4>Underweight</h4>
          <p>Less then 18.5</p>
        </div>
        <div>
          <h4>Normal weight</h4>
          <p>18.5 - 25</p>
        </div>
        <div>
          <h4>Overweight</h4>
          <p>25 - 30</p>
        </div>
        <div>
          <h4>Obese</h4>
          <p>Greater then 18.5</p>
        </div>
      </div>
    </div>
  );
}
