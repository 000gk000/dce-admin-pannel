import { FaArrowRight } from "react-icons/fa6";

import AddAfiliation from "../components/AddAfiliation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { NavLink } from "react-router-dom";



const About = () => {
  return (
    <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className="bg-customGray w-full  p-8 ml-4 ">
          <p className="font-bold text-lg leading-48 mb-4">About Us</p>
          <div className="flex gap-4">
            <div className="flex flex-row bg-white rounded-md shadow-2xl min-h-[256px] p-4 overflow-hidden sm:flex-col ">
              <p>History</p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 mx-auto block mt-3 w-40">
                Update
              </button>
            </div>
            <div className=" min-h-[256px] p-4 flex bg-white shadow-2xl rounded-md overflow-hidden  ">
              <div className="">
                <img src="./photo34.jpg" className=" mt-8"></img>
                <NavLink to="">
                  <p className="whitespace-nowrap">change photo</p>
                </NavLink>
              </div>
              <div className="p-4 ml-4">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchange
                <button className="bg-blue-500 text-white rounded-md py-2 px-4 mx-auto block mt-2 w-40">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-2xl rounded-md overflow-auto h-[300px]  mt-[100px] ">
            <div className="flex justify-between">
              <p className="text-left text-xl font-semibold text-slate-600 m-4">
                Afiliation
              </p>
              <div className="text-right m-4 text-sky-600">
                <span className="inline-block">
                 
                  <NavLink to=""> View All</NavLink>{" "}
                </span>
                <FaArrowRight className="inline-block" />
              </div>
            </div>

            <table className="w-full p-2 m-4 border border-gray-300 rounded-lg ">
              <thead className="bg-cyan-100 text-black">
                <tr>
                  <th className="p-2 text-center">S.No</th>
                  <th className="p-2 text-center">Name of Department</th>
                  <th className="p-2 text-center">Approved intake</th>
                  <th className="p-2 text-center">Since</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300">
                  <td className="p-2 text-center">hello</td>
                  <td className="p-2 text-center">how</td>
                  <td className="p-2 text-center">are</td>
                  <td className="p-2 text-center">you</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center ">
      <AddAfiliation/>
    </div>
        </div>
      </div>
    </div>
  );
};
export default About;
