import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";


const AllCoffees = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div className="py-8 lg:py-16 ">
            <h2 className="text-xl md:text-3xl font-semibold text-center py-4">
                Total Coffees : {coffees.length} </h2>
                <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 md:gap-10">
                    {
                       coffees && coffees.map((coffee)=><Coffee key={coffee._id} coffee={coffee}/>) 
                    }
                </div>
        </div>
    );
};

export default AllCoffees;