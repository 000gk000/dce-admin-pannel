
const DropDownProfile = () =>{
    return (
        <div className="flex flex-col shadow-md transition-all duration-500 ease-in-out dropDownProfile">
            <ul className="flex flex-col gap-3">
                <li>
                    <div className="flex  text-xs items-center space-x-2">
                        <img
                        className="h-8"
                         src = "https://th.bing.com/th/id/OIP.v7bSG_lRiM3DgNAmGHbe3gHaHa?rs=1&pid=ImgDetMain"
                         alt=""/>

                         <div className="flex flex-col">
                            <span>Shashi Ranjan Kumar</span>
                            <span className="font-bold">Administration</span>
                         </div>

                    </div>
                </li>
                <li><hr className="border-[#737373]"/></li>
                <li className="cursor-pointer">
                    <div className="p-1 hover:bg-[#F5F0FB]">
                        <span>Profile</span>
                    </div>
                </li>
                <li className="cursor-pointer">
                <div className="p-1 hover:bg-[#F5F0FB]">
                        <span>Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DropDownProfile;