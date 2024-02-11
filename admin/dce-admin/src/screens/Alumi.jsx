import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Alumni=()=>{
    return (
        <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className=" w-full h-full px-4 pt-2 bg-customGray space-y-5">
          Alumni
        </div>
      </div>
    </div>
    )
}

export default Alumni;