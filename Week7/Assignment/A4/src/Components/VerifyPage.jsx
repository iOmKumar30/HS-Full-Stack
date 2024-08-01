import React, { useState, useRef, useEffect } from 'react';

export function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!value.match(/^\d*$/)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1].focus();
    }

    if (e.key === 'ArrowRight' && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[500px] h-[500px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-row gap-4 leading-loose">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pb-3">
          Enter
        </span>
        <span>OTP</span>
      </h1>
      <div className="flex items-center justify-center gap-3">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxLength="1"
          />
        ))}
      </div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3">
        Verify OTP
      </button>
    </div>
  );
}
