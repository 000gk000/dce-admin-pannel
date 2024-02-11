import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import Carousel from "../components/Carousel";

const carousel = [
  "https://th.bing.com/th?id=OIP.kwQ9NoM2FCjLGuZfKUpUPwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.itiqnuWQFbp9PEX8IuMAMAHaD3&w=345&h=180&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.5vNl0v9HvV5W6pIKi-VRewHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.qy-jE27TmOHxpMVz_A-4OgHaEP&w=330&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.kwQ9NoM2FCjLGuZfKUpUPwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.itiqnuWQFbp9PEX8IuMAMAHaD3&w=345&h=180&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.5vNl0v9HvV5W6pIKi-VRewHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.qy-jE27TmOHxpMVz_A-4OgHaEP&w=330&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
];

const Home = () => {
  return (
    <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className=" w-full h-full px-2 lg:px-4 pt-2 bg-customGray space-y-4 ">
          <PageHeader name={"Home"} />
          <Carousel carousels={carousel} />
        </div>
      </div>
    </div>
  );
};

export default Home;
