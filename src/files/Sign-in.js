import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Lo() {
  const [name, setname] = useState("");
  const [email_id, setemail_id] = useState("");
  const [password, setpassword] = useState("");

  const av = useNavigate();
  const se = async (event) => {
    event.preventDefault();
    try { 
      await axios.post("https://ecom-ten-blue.vercel.app/sign-in/", {
        email_id: email_id,
        name: name,
        password: password,
      });
      av("/login");
    } catch (err) {
      console.log("error");
    }
  };

  const ssid = (event) => {
    setemail_id(event.target.value);
  };

  const mss = (event) => {
    setname(event.target.value);
  };

  const ssed = (event) => {
    setpassword(event.target.value);
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-blue-50 px-2">
    <div className="w-full max-w-[1023px] bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 bg-blue-700 flex flex-col justify-center items-center p-8 md:p-12 text-white">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <p className="text-lg mb-2 text-blue-100">Create your account to access Orders, Wishlist and more!</p>
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg"
          alt="Sign Up Illustration"
          className="w-48 mt-8 hidden md:block"
        />
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12">
        <form onSubmit={se} className="space-y-6 w-full max-w-sm mx-auto">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={mss}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email ID</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email_id"
              placeholder="Enter your email"
              onChange={ssid}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={ssed}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          <div className="text-center mt-2">
            <Link to="/login" className="text-blue-600 hover:underline text-sm">
              Already registered? Please Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
