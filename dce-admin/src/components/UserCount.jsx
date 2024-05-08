
const UserCount=({text, count , image})=>{
    return(
        <div className="flex p-3 px-4 shadow-csm rounded-md justify-between items-center h-36 bg-white">
            <div className="flex flex-col space-y-2">
                <span className="text-xsm text-textBlack">{text}</span>
                <span className="text-xl font-bold text-textBlack">{count}</span>
            </div>

            <div className="w-20">
                <img src={image} alt=""/>
            </div>
            
        </div>
    )
}

export default UserCount;