import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeDetails =()=>{
    const coffee = useLoaderData();
    const {name,chef,_id,photo,price,supplier,details,taste}= coffee;
    console.log(coffee);
    const handleUpdate =(event)=>{
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const coffeeItems = {
            name,chef,supplier,taste,details,photo,price
        }
        console.log(coffeeItems);
        window.alert('Coffee Added Successfully!!')
        form.reset();

        fetch(`http://localhost:5000/coffees/${_id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(coffeeItems)

    
        })
        .then((res)=>res.json())
        .then((data)=>{
             
            console.log(data);
            if (data.insertedId) {
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully!!',
                    icon: 'success',
                    confirmButtonText: 'Submit'
                  })
                  
            }
            
        }
        
    
    )
    
    }
    return (
        <div>
            <Link className="text-blue-500 underline text-lg" to='/'>Back to HomePage</Link>
            <div className="bg-slate-200 py-6 lg:py-12 px-4">
           <h2 className="text-xl lg:text-2xl font-semibold text-center py-2 lg:py-6">Update Coffee</h2>
           <div>
            <p className="mb-2 md:mb-4">Discover our latest coffee additions, crafted to elevate your experience with unique flavors and aromas. Explore freshly curated blends from around the world, each with its distinct character. Add a new coffee to your collection and enjoy a taste journey like never before!</p>
           </div>
           <div>
            <form onSubmit={handleUpdate} className="flex items-center justify-center">
               <div>
               

                 {/* ======= 1st row =========== */}
                 <div className="block md:flex items-center justify-center gap-2 lg:gap-24 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="name" className="block">Name</label>
                    <input defaultValue={name} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="name"  placeholder="Enter coffee name"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="chef" className="block">Chef</label>
                    <input defaultValue={chef} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="chef"  placeholder="Enter Chef name"/>
                    </div>
                    
                </div>

                {/* ================ 2nd row =========== */}
                <div className="block md:flex items-center justify-center gap-2 lg:gap-24 mt-3 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="supplier" className="block">Supplier</label>
                    <input defaultValue={supplier} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="supplier"  placeholder="Enter Coffee Supplier"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="taste" className="block">Taste</label>
                    <input defaultValue={taste} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="taste"  placeholder="Enter Coffee Taste"/>
                    </div>
                    
                </div>

                {/* ================= 3rd row ============= */}
                <div className="block md:flex items-center justify-center gap-2 lg:gap-24 mt-3 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="price" className="block">price</label>
                    <input defaultValue={price} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="price"  placeholder="Enter Coffee price"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="details" className="block">Details</label>
                    <input defaultValue={details} required className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="details"  placeholder="Enter Coffee details"/>
                    </div>
                    
                </div>

                {/* ============ single row ========== */}
                <div className="text-center md:text-start mt-3">
                    <label htmlFor="photo" className="block">Photo</label>
                    <input required className="w-full lg:w-[672px] px-3 py-1 mt-2 rounded-md" type="text" id="photo"  defaultValue={photo} placeholder="Enter Coffee Photo"/>
                    </div>

                    {/* ================ Submit button =============== */}
                    <div className="py-2 lg:py-4 mt-2">
                        <button type="submit"  id="submit" className="bg-[#967259] text-white w-full lg:w-[672px] rounded-md py-1 hover:bg-amber-500 border-2 border-slate-950">
                           Submit
                        </button>

                    </div>
               </div>

            </form>
           </div>
        </div>
        </div>
    )
};

export default CoffeeDetails;