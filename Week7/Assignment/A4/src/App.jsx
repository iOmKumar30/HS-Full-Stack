import { useState } from "react";
import axios from "axios";
import { SendingPage } from "./Components/SendingPage";
import { VerifyPage } from "./Components/VerifyPage";

function App() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpId, setOtpId] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = async () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      {error && <div className="text-red-500">{error}</div>}
      {isOtpSent ? (
        <VerifyPage onVerifyOtp={handleVerifyOtp} />
      ) : (
        <SendingPage
          onSendOtp={handleSendOtp}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
        />
      )}
    </div>
  );
}

export default App;

// https://rapidapi.com/Atia/api/otp-sms-verification/playground/apiendpoint_2046bdf9-6176-40a6-a1ff-b83b0082eeea
// check the above sign up get your key then integrate the API
