
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Update from "../components/updatetandp";
const TrainingPlacement=()=>{
    return (
        <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className=" w-full h-full px-4 pt-2 bg-customGray space-y-5">
        <p className="text-slate-500 font-semibold text-2xl ">Training & Placement </p>
        <div className=" shadow-2xl bg-white w-full min-h-40 p-6 overflow-hidden">
         <p className="font-semibold text-xl">About Placement</p>
         <p>Lorem ipsum dolor sit amet loree. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum distinctio suscipit corporis nesciunt, magni repellendus sed nihil. Debitis repellat quam placeat architecto asperiores mollitia temporibus dolore atque quasi sint.Quod veniadolore.</p>
      <div className="flex justify-end gap-4">
        <button className=" bg-red-500  text-white w-40 p-1 rounded-md">remove</button>
      <Update/>
        </div> 
        </div>
        </div>
      </div>
    </div> 
    )
}

export default TrainingPlacement;