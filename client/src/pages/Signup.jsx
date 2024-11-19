import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Signup</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          SIGNUP
        </button>
        <span className="block mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
