import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Lo() {
  const [email_id, setemail_id] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const av = useNavigate();

  const se = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      axios
        .post("https://ecom-ten-blue.vercel.app/login/", {
        // .post("http://localhost:800/login", {  
          email_id: email_id,
          password: password,
        }, {withCredentials: true})  
        .then((res) => {
          setLoading(false);
          if (res.data.Status === "Success") {
            window.localStorage.setItem("token", res.data.token); 
            // document.cookie = `token=${res.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`;
            av("/");
          } else {
            av("/si");
          }  
        })
        .catch(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log("error");
    }
  };

  const ssid = (event) => {
    setemail_id(event.target.value);
  };

  const ssed = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-2">
      <div className="w-full max-w-[1023px] bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-blue-700 flex flex-col justify-center items-center p-8 md:p-12 text-white">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="text-lg mb-2 text-blue-100">Get access to your Orders, Wishlist and Recommendations</p>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
            alt="Login Illustration"
            className="w-48 mt-8 hidden md:block"
          />
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <form onSubmit={se} className="space-y-6 w-full max-w-sm mx-auto">
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
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              )}
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-center mt-2">
              <Link to="/sign-in" className="text-blue-600 hover:underline text-sm">
                New to Cart? Please Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}