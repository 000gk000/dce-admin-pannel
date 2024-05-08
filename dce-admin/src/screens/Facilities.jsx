
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Facilities=()=>{
    return (
        <div className="flex w-screen  ">
      <Sidebar />
      <div className="w-full h-screen overflow-scroll">
        <Navbar />
        <div className=" w-full h-full px-4 pt-2 bg-customGray space-y-5">
          <p className="text-slate-700 font-bold text-xl">Facilities</p>
          <div className=" grid grid-flow-col col-span-3 bg-white shadow-xl min-h-40 overflow-hidden">
          <div>
            <p className="text-slate-700 font-semibold text-xl ml-4">Computer Center</p>
               <img src="./photo34.jpg" className="h-32 m-4"></img>
          </div>
          <div className="mt-16">
              <p className="border-2 border-slate-400 rounded-lg p-1 text-sm">HOD,Computer science</p>
              <p className="mt-2">Change Photo</p>
          </div>
          <div className="ml-8 mt-4 relative">
                   Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempora optio mollitia hic quo excepturi consequuntur corrupti. Natus voluptas a ratione id, aperiam corrupti tempore praesentium aspernatur modi vero qui! adipisicing elit. Nulla aliquid, rerum quod perspiciatis accusamus magni esse excepturi praesentium assumenda amet deserunt repellat alias labore obcaecati tenetur earum veniam magnam ex?
                  
                    <button className="absolute bottom-4 right-4 bg-sky-500 text-semibold text-white w-40 rounded-lg p-1">Update</button>
                  
          </div>
         
           
           

          </div>
        </div>
      </div>
    </div>
    )
}

export default Facilities;