import React, { useRef, useState } from "react";
import "./style.css";

const CardInput = () => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    if (/^[0-9]*$/.test(value)) {
      setCardNumber((prevCardNumber) => {
        const newCardNumber = [...prevCardNumber];
        newCardNumber[index] = value;
        return newCardNumber;
      });

      if (value.length === 4 && index < 3) {
        inputRefs[index + 1].current.focus();
      }

      setErrorMessage("");
    } else {
      setErrorMessage("Zadejte čtyřmístné číslo");
    }
  };

  return (
    <div className="credit-card">
      {cardNumber.map((value, index) => (
        <input
          className="credit-card-input"
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength="4"
          value={value}
          onChange={(event) => handleInputChange(index, event)}
        />
      ))}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CardInput;
