export function SendingPage({ onSendOtp, mobileNumber, setMobileNumber }) {
  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[500px] h-[500px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-row gap-4 leading-loose">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pb-3">
          Login
        </span>
        <span>Via OTP</span>
      </h1>
      <input
        type="text"
        placeholder="Enter Your Mobile Number"
        className="border-2 border-black rounded-lg p-3 w-full text-center mt-2 max-w-sm text-2xl"
        value={mobileNumber}
        onChange={handleChange}
      />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3"
        onClick={onSendOtp}
      >
        Send OTP
      </button>
    </div>
  );
}
