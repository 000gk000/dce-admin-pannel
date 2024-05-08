import menu from "../images/menu.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DropDownProfile from "./DropDownProfile";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/SidebarSlice";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useDispatch()
  const handleToggleSidebar=()=>{
    dispatch(toggleSidebar())
  }

  return (
    <div className="navbar sticky top-0 z-40 left-0 bg-white py-2 px-4 flex items-center border-b-2 justify-between">
      <div className="left flex items-center justify-between space-x-2 lg:space-x-12">
        <div className="w-8  " onClick={()=>handleToggleSidebar()}>
          <img src={menu} alt="" />
        </div>

        <div className="flex items-center justify-between outline-[#D9D9D9] rounded-md border-2 ">
          <input className="p-1 outline-none w-[50%]" placeholder="Search here" />
          <SearchOutlinedIcon className="mr-1 text-[#737373]" />
        </div>
      </div>

      <div className="right flex items-center space-x-2 lg:space-x-12">
        <div className="zoom rounded-3xl bg-[#EEEE] p-1 hidden lg:block">
          <CropFreeOutlinedIcon className="text-[#737373]" />
        </div>

        <div
          className="profile flex items-center cursor-default"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <div className="rounded-3xl border-2 w-9 h-9">
            <img
              src="https://th.bing.com/th/id/OIP.v7bSG_lRiM3DgNAmGHbe3gHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="text-xs hidden lg:flex lg:flex-col">
            <span>Shashi Ranjan</span>
            <span className="text-blue-500">Administration</span>
          </div>

          <KeyboardArrowDownOutlinedIcon className={`text-[#737373] transition-all duration-300 ease-in-out ${openProfile? "rotate-180" : "rotate-0"}`} />
        </div>
      </div>

      {openProfile && <DropDownProfile />}
    </div>
  );
};

export default Navbar;
