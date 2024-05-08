import Dcelogo from "./../images/dcelogo.png";
import CloseIcon from "@mui/icons-material/Close";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/SidebarSlice";
import {Link, NavLink} from 'react-router-dom'
import { setSelectedIndex } from '../store/slices/SidebarSelectedItem';

const menuItems = [
  {
    icon: <DashboardOutlinedIcon />,
    label: "Dashboard",
    link:'/'
  },
  {
    icon: <HomeOutlinedIcon />,
    label: "Home",
    link:'/home'
  },
  {
    icon: <SchoolOutlinedIcon />,
    label: "Academic",
    link:'/academic'
  },
  {
    icon: <InfoOutlinedIcon />,
    label: "About us",
    link:'/aboutus'
  },
  {
    icon: <ApartmentIcon />,
    label: "Facilities",
    link:'/facility'
  },
  {
    icon: <StarsOutlinedIcon />,
    label: "Training & Placement",
    link:'/training'
  },
  {
    icon: <FaceOutlinedIcon />,
    label: "Student Corner",
    link:'/studentcorner'
  },
  {
    icon: <EmojiEventsOutlinedIcon />,
    label: "Activities",
    link:'/activity'
  },
  {
    icon: <DiamondOutlinedIcon />,
    label: "Alumni",
    link:'/alumni'
  },
  {
    icon: <ApprovalOutlinedIcon />,
    label: "Approval",
    link:'/approval'
  },
  {
    icon: <ModelTrainingOutlinedIcon />,
    label: "NIRF",
    link:'/nirf'
  },
  {
    icon: <LanOutlinedIcon />,
    label: "Departments",
    link:'/departments'
  },
];

const Sidebar = () => {

   const selectedItem = useSelector(state => state.sidebarSelected.selectedIndex);

  const [isHovered, setIsHovered] = useState(false);
  // const [selectedItem , setSelectedItem] = useState(0);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isVisible);
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  const handleItemClick =(index)=>{
    //setSelectedItem(index);
    dispatch(setSelectedIndex(index))
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log({selectedItem})


  return (
    
    <div
      className={`sidebar bg-white z-50 fixed h-screen lg:static overflow-hidden border-r-2 shadow-md transition-all 
      duration-500 ease-in-out ${
        isOpen ? "w-[80%] md:w-[50%] lg:w-[20rem]" : "w-0 lg:w-14 "
      } ${isHovered ? "lg:w-[20rem]" : ""} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="top py-2">
        <div className="flex p-2 space-x-4 border-b-2">
          <img
            className={`w-[2rem] h-7 ${!isOpen && "h-[2rem]"}`}
            src={Dcelogo}
          ></img>

          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col  items-center font-bold">
              <span
                className={`text-xs whitespace-nowrap ${isOpen?"scale-100":"scale-0"} ${isHovered ?"scale-100":""}`}
              >
                Darbhanga College of
              </span>
              <span className={`text-xs ${isOpen?"scale-100":"scale-0"} ${isHovered ?"scale-100":""}`}>
                Engineering
              </span>
            </div>
            <div
              className={`lg:hidden ${!isOpen && "hidden"}`}
              onClick={handleClick}
            >
              <CloseIcon className="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`center`}>

       {menuItems.map((item, index) => (
        <Link to={item.link}>
       
          <div key={index} className={`h-12 bg-[#fffff] flex items-center  `} >
            <div className={`h-full rounded-r-md ${isOpen?"w-2":"w-1"} ${selectedItem === index ?"bg-selectedColor":"bg-white"}`}></div>
            
            <div
              className={`px-3 flex items-center w-full h-full cursor-default hover:bg-customGray transition-all duration-300 ease-in-out ${isOpen?"hover:px-6":""} ${selectedItem === index?"bg-selectedContainer px-6":"bg-white"}`}
              onClick={()=>handleItemClick(index)}
            >
              {item.icon}
              <span className={`ml-3 whitespace-nowrap transition-all duration-300 ease-in-out  ${isOpen?"scale-100":"scale-0"} ${isHovered ?"scale-100":""}`}>{item.label}</span>
            </div>
            
          </div>
          
           </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
