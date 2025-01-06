import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
const Login = () => {
  const [loginInfo,setLoginInfo]=useState({
    email:'',
    password:''
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(name,value);
    setLoginInfo((prev)=>({...prev,[name]:value}))
  }
  const navigate=useNavigate();
  const handleSignup=async(e)=>{
    e.preventDefault();
    const {email,password}=loginInfo;
    if( !email || !password){
      return handleError('Please fill all the fields');
    }
    try {
      const url="http://localhost:4000/api/auth/login";
      const response= await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',

        },
          body:JSON.stringify(loginInfo)
      })
      const result= await response.json();
      console.log(result);
      const {success,msg,error,jwtToken,userName}=result;
      if(success){
        handleSuccess(msg);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',userName);
        setTimeout(()=>{
          navigate('/')
        },1000)
      }
     else if(error){
      const details=error?.details[0].message
        handleError(details);
      }
      else if(!success){
              handleError("already resgisterd or error")
      }
    } catch (error) {
      console.log(error);
      return handleError(error)
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md" onSubmit={handleSignup}>
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>
        <div>
         
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            autoFocus
            value={loginInfo.email}
            placeholder="Enter Email..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-600">Password</label>
          <input 
            onChange={handleChange}
            type="password"
            name="password"
            value={loginInfo.password}
            autoFocus
            placeholder="Enter Password..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 m-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
        <span className="block mt-4 text-sm text-center text-gray-600">
          dont have an account?
          <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
