 import propTypes  from "prop-types";
const AcademicDiv = ( {name }) => {
   
  return (
    <>
      <div className="bg-white shadow-xl rounded-xl  ">
        <div className=" flex">
          <div>
            <span className="font-bold text-slate-500 ml-4">{name}</span>
            <img className="h-20 mt-6" src="./pdf.png"></img>
          </div>
          <div className="mt-8 ml-4">
            <p className="ml-4 mt-4  w-40 whitespace-nowrap border-2  text-center border-black rounded-md">
             something
            </p>
            <div className="space-x-4 pb-6">
              <button className=" mt-10 w-20 bg-red-500 rounded-md text-white font-semibold">
                Delete
              </button>
              <button className=" mt-10 w-40 bg-blue-300 rounded-md text-blue-700 font-semibold whitespace-nowrap"> 
                update pdf
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};
AcademicDiv.propTypes = {
    name:propTypes.string,
  }



export default AcademicDiv;
