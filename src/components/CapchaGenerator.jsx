import React, { useEffect, useState } from "react";
import { generateCaptcha, getCharStyle } from "../utils/helper";

//TODO 1: Write a function that returns a random string of letters and numbers
//TODO 2: When the component loads, generate a new captcha and store input
//TODO 3: Compare user input with the captcha when form is submitted
//TODO 4: When "Regenerate" button is clicked, create a new captcha

export default function CaptchaGenerator() {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // write validation logic here
    e.preventDefault();
    if (captcha === input) {
      setMessage("Correct");
    } else {
      setMessage("Incorrect");
    }
  };

  const resetCaptcha = () => {
    // regenerate the captcha here
    setCaptcha(generateCaptcha());
    setInput("");
    setMessage(null);
  };

  useEffect(() => {
    // generate and set captcha here
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <div className="container" style={{ fontFamily: "monospace" }}>
      <h2>Captcha Generator</h2>

      <div className="captcha-box">
        {captcha.split("").map((char, i) => (
          <span key={i} style={getCharStyle()}>
            {char}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter captcha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetCaptcha}>
          Regenerate
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
