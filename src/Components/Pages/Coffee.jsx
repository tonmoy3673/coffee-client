
import { useState } from "react";
import { FaDeleteLeft, FaEye, FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffee = ({coffee}) => {
    const [loading,setLoading] = useState(false);

    const {name,chef,_id,photo,price,}= coffee;
    const handleDelete =(_id)=>{
        setLoading(true);
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          
          .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`,{
                    method:'DELETE',
            
                })
                .then((res)=>res.json())
                .then((data)=>{
                    if (data.deletedCount>0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                          })
                    }
                })
              
            }
            setLoading (false)
          });

    }
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
                
               <Link to={`/coffees/${_id}`}> <button><FaPencil fill="green" /></button></Link>
               
                <button onClick={()=>handleDelete(_id)} ><FaDeleteLeft fill="red" /></button>
            </div>
            
        </div>
    );
};

export default Coffee;