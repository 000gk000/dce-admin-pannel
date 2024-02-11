import Graph from "../components/Graph";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import UserCount from "../components/UserCount";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const users =
  "https://th.bing.com/th/id/OIP.ub99AiWmUVDc_XTQEhXJ0gHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7";

const links = [
  {
    url: "www.url.com",
  },
  {
    url: "www.url.com",
  },
  {
    url: "www.url.com",
  },
  {
    url: "www.url.com",
  },
  {
    url: "www.url.com",
  },
];

const Dashboard = () => {
  return (
    <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className=" w-full h-full px-4 pt-2 bg-customGray space-y-5">
          <PageHeader
            name={"Welcome Shashi Ranjan Kumar"}
            style={"font-bold text-2xl"}
          />
          <div className=" lg:flex lg:justify-between w-full space-y-4 lg:space-y-0 lg:mr-4">
            <div className="left w-full lg:w-[50%] space-y-4">
              <UserCount text={"Total visits"} count={"321467"} image={users} />
              <UserCount text={"Total visits"} count={"321467"} image={users} />
            </div>
            <div className="right w-full lg:w-[50%] space-y-4 lg:ml-4">
              <Graph />
            </div>
          </div>
          <div className="bg-white w-full rounded-md shadow-csm p-3 flex flex-col lg:flex-row justify-between">
            <div className="left flex flex-col justify-center pb-2 lg:w-[45%]">
              <span className="text-vectorColor font-bold">Links</span>
              <div className="py-2 flex flex-col items-center w-full ">
                {links.map((link) => (
                  <span className="border-2 w-full  p-1 cursor-pointer hover:text-textBlue">
                    {link.url}
                  </span>
                ))}
              </div>
              <div className="text-textBlue flex items-center justify-end cursor-pointer">
                <span className="self-end ">view all</span>
                <EastOutlinedIcon />
              </div>
            </div>
            <div className="border-2"></div>
            <div className="left flex flex-col justify-center py-3 lg:w-[45%]">
              <span className="text-vectorColor font-bold">Notice</span>
              <div className="py-2 flex flex-col items-center">
                {links.map((link) => (
                  <span className="border-2 w-full p-1 cursor-pointer hover:text-textBlue">
                    {link.url}
                  </span>
                ))}
              </div>
              <div className="text-textBlue flex items-center justify-end cursor-pointer">
                <span className="self-end">view all</span>
                <EastOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
