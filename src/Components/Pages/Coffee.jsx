
import { FaDeleteLeft, FaEye, FaPencil } from "react-icons/fa6";
const Coffee = ({coffee}) => {
    const {name,chef,_id,photo,price}= coffee;
    return (
        <div className="grid grid-cols-8 items-center bg-slate-200 rounded-md py-8 ">
            <div className="col-span-3">
                <img src={photo} className="flex justify-center"/>
            </div>
            <div className="col-span-4 ">
                <h3><span className="font-semibold">Name</span> : {name}</h3>
                <h4><span className="font-semibold">Chef</span> : {chef}</h4>
                <p className="text-red-500"> <span className="font-semibold text-black">Price</span> : {price} $</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-end col-span-1">
                <button><FaEye fill="blue" /></button>
                
                <button><FaPencil fill="green" /></button>
               
                <button ><FaDeleteLeft fill="red" /></button>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    );
};

export default Coffee;