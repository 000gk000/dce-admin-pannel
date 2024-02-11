import React from "react";
import { useState } from "react";

const Login = () => {
  const [emai, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-[#91b2f2ff] to-[#c8b8f5ff] transition-all duration-600 ease-in-out">
      <div
        className="backdrop-blur-md border-2 border-white px-10 sm:p-16 py-14 flex flex-col justify-center items-center 
                rounded-lg sm:w-[80%] md:w-[50%] lg:w-[40%]"
      >
        <div className="font-bold text-2xl ">Welcome</div>
        <div className="text-[#ffef]"> Please enter your details</div>

        <div className="bg-white p-2 rounded-lg mt-8 w-full">
          <input className="text-[#abababff] w-full focus:outline-none" type="email" value="" placeholder="Enter your email"/>
        </div>
        <div className="bg-white p-2 rounded-lg mt-5 w-full">
          <input className="text-[#abababff] w-full focus:outline-none" placeholder="Enter your password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        
        </div>

        <div className="w-full flex justify-end mt-2">
          <div className="text-sm text-[#5a5778ff] me-2 cursor-pointer">Forgot password?</div>
        </div>

        <div className="mt-5 text-sm cursor-pointer text-white w-full flex justify-center bg-black py-2 rounded-lg">
          Sign in
        </div>
      </div>
    </div>
  );
};

export default Login;
