import React, { useState, useEffect, useRef } from "react";
import "./App.css";
const App = () => {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setotp] = useState([...emptyArr]);

  const missing = []
  for(let i = 0; i < otp.length; i++){
    if(otp[i] === ""){
      missing.push(i);
    }
  }

  useEffect(() => {
    refs[0].current.focus();
    console.log(otp);
  }, []);

  const handleInput = (e, index) => {
    let val = e.target.value;

    if (!Number(val)) return;
    if (index < otp.length - 1) {
      refs[index+1].current.focus();
    }
    const newOtp = [...otp];
    newOtp[index] = val;
    setotp(newOtp);
  };

  const handleKeydown = (e, index) => {
    if(e.keyCode === 8){
      if(index >= 0){
        const newOtp = [...otp];
        newOtp[index] = ""
        console.log("new otp = ", newOtp);
        setotp(newOtp);
        console.log("otp = ", otp);
        if(index > 0){
          refs[index - 1].current.focus();
        }
      }
    }
  }

  const handlePaste = (e, index) => {
    const data = e.clipboardData.getData('text')
    console.log("data = ", data);
    if(!Number(data) || data.length !== otp.length){
      return;
    }
    let newArr = data.split('');
    setotp(newArr);
    refs[otp.length - 1].current.focus()
  }

  return (
    <div className="main">
      <div className="wrapper">
        <h1>OTP input by Vedant - Machine coding</h1>
        <div className="box">
          {otp.map((item, index) => (
            <input
              value={otp[index]}
              type="text"
              maxLength="1"
              ref={refs[index]}
              onChange={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeydown(e, index)}
              onPaste={handlePaste}
              key={index}
              style={{
                border: `${missing.includes(index) ? '2px solid red' : ''}`
              }}
            />
          ))}
        </div>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};

export default App;
