import React, { useState } from "react";
import logo from "../images/check.png";
import { useNavigate } from "react-router-dom";

const Homepage = ({setUserName}) => {

  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErromessage] = useState('');



  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkinput = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setErromessage("Please Enter your name")
      
    } else {
      setUserName(inputValue);
      setErromessage("");
      navigate("/Todopage");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen   bg-green-700">
      <div className="container bg-gray-600 rounded-lg shadow-lg w-[350px] h-[600px] flex flex-col items-center justify-center">
        <div className="text-center justify-center align-middle mb-10">
          <img src={logo} alt="Logo" className="w-40 h-40  ml-10 mb-20" />
          <h2 className="text-lg font-medium text-gray-800 ">
            Empowering You Every Day,
          </h2>
          <h2 className="text-lg font-medium text-gray-800 mb-3">
            One Task at a Time
          </h2>
          <input
            type="text"
            placeholder="First Name"
            value={inputValue}
            onChange={handleInputChange}
            className="w-3/4  text-center p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          />
        <div className="h-6 flex ">
           {errorMessage && (
            <p className="text-red-500 ml-8 text-center">{errorMessage}</p>
          )}
</div>
          <button
            className="bg-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            onClick={checkinput}
          >
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
