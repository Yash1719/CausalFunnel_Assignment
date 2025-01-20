import { Link } from "react-router-dom";
import { TestContext } from "../context/TestContext";
import { useContext, useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.svg";

const Home = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const { data, dispatch } = useContext(TestContext);

  // function for validating the email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const [validData, setValidData] = useState(false);

  useEffect(() => {
    if (validateEmail(data.user.email) && data.user.name.length > 0) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  }, [data.user]);

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-12 py-12 px-4">
      {/* Hero Image */}
      <div className="w-full sm:w-1/2">
        <img
          src={heroImg}
          alt="homeImg"
          className="w-3/4 mx-auto animate-wiggle"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-6 w-full sm:w-1/2 bg-white shadow-lg p-8 rounded-md">
        <div className="text-sky-900 text-3xl font-bold mb-4">
          Welcome to <span className="text-sky-500">CausalFunnel</span> Quiz!
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sky-700 font-semibold">
            User Name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={data.user.name}
            placeholder="Enter Your Name"
            className="border-2 border-gray-300 focus:border-sky-500 rounded-md p-3 outline-none transition-all"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_USER",
                payload: { name: e.target.value, email: emailRef.current.value },
              });
            }}
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sky-700 font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            value={data.user.email}
            placeholder="yourname@gmail.com"
            className="border-2 border-gray-300 focus:border-sky-500 rounded-md p-3 outline-none transition-all"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_USER",
                payload: { name: nameRef.current.value, email: e.target.value },
              });
            }}
          />
        </div>

        {/* Submit Button */}
        <Link to="/start">
          <button
            disabled={!validData}
            className={`py-3 px-6 rounded-md font-medium text-white transition-all ${
              validData
                ? "bg-sky-500 hover:bg-sky-600 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </Link>
      </div>
    </section>
  );    
};

export default Home;
