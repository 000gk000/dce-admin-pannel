
import  DeleteCarouselAlert from "../components/DeleteCarouselAlert";
import AddCarousel from "./AddCarousel";
import AlertDialogSlide from "./AlertDialogSlide";

const Carousel = ({ carousels }) => {
  return (
    <div className="w-full shadow-csm p-1 rounded-lg space-y-4">
      <div className="w-full flex justify-between items-center cursor-default">
        <div className="flex items-center space-x-2">
          <span> Carousel</span>
          <span>- {carousels.length}</span>
        </div>
        <div className="actions_btn flex items-center space-x-2 lg:space-x-6">
          <AlertDialogSlide/>
          {/* <div className="bg-blue-200 p-1 flex items-center rounded-sm ">
            <span className="text-xs text-blue-600">Add New</span>
          </div> */}
          <AddCarousel/>
        </div>
      </div>
      <div className="flex space-x-5 items-center w-full p-1  overflow-x-scroll">
        {carousels.map((carousel, index) => (
          <div key={index} className=" h-full w-[50%]">
            <div className="relative min-w-52 minh-34">
              <img
                className="rounded-md"
                src={carousel}
              />
              <div className="absolute top-0 right-0 p-1 bg-black rounded-l-md">
                   <DeleteCarouselAlert/>
              </div>
             <div className="absolute bottom-0 left-0 w-full bg-black flex justify-center  ">
                            <span className="text-white text-xs text-center">Description</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
