
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AcademicDiv from "../components/AcademicDiv";
const Academic=()=>{
  const data = [
    {id:1, text:"Regulation"},
    { id:2 , text:"List of Holidays "},
    {id:3, text:"Attendance"},
    { id:4 , text:"Syllabus"},
    {id:5, text:"Disciplinary Rule "},
    { id:6 , text:"Course sturcture"},
    {id:7, text:"Academic clender"},
    { id:8 , text:"Notice form Government"},
  ]
    return (
        <div className="flex w-screen  ">
        <Sidebar />
        <div className="w-full h-screen overflow-scroll">
          <Navbar />
          <div className=" w-full px-4 pt-2 bg-customGray space-y-5">
            <div className="grid lg:grid-cols-2 gap-8 sm:grid-rows-1 sm:m-4 sm:p-8  ">
            {
              data.map((item)=>(
                <AcademicDiv key={item.id} name={item.text}/>
              ))
            }
            </div> 
          </div>
        </div>
      </div>
    )
}

export default Academic;