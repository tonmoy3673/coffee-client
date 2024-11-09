import { useLoaderData } from "react-router-dom";


const AllCoffees = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div className="py-8 lg:py-16 ">
            <h2 className="text-xl md:text-3xl font-semibold text-center py-4">
                Total Coffees : {coffees.length} </h2>
        </div>
    );
};

export default AllCoffees;