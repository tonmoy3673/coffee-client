

const AddCoffee = () => {
    return (
        <div className="bg-slate-200 py-6 lg:py-12 px-4">
           <h2 className="text-xl lg:text-2xl font-semibold text-center py-2 lg:py-6">Add New Coffee</h2>
           <div>
            <p className="mb-2 md:mb-4">Discover our latest coffee additions, crafted to elevate your experience with unique flavors and aromas. Explore freshly curated blends from around the world, each with its distinct character. Add a new coffee to your collection and enjoy a taste journey like never before!</p>
           </div>
           <div>
            <form className="flex items-center justify-center">
               <div>
                 {/* ======= 1st row =========== */}
                 <div className="block md:flex items-center justify-center gap-2 lg:gap-24 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="name" className="block">Name</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="name"  placeholder="Enter coffee name"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="chef" className="block">Chef</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="name"  placeholder="Enter Chef name"/>
                    </div>
                    
                </div>

                {/* ================ 2nd row =========== */}
                <div className="block md:flex items-center justify-center gap-2 lg:gap-24 mt-3 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="supplier" className="block">Supplier</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="supplier"  placeholder="Enter Coffee Supplier"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="taste" className="block">Taste</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="taste"  placeholder="Enter Coffee Taste"/>
                    </div>
                    
                </div>

                {/* ================= 3rd row ============= */}
                <div className="block md:flex items-center justify-center gap-2 lg:gap-24 mt-3 ">
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="category" className="block">Category</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="category"  placeholder="Enter Coffee Category"/>
                    </div>
                    
                    <div className="text-center md:text-start mt-3">
                    <label htmlFor="details" className="block">Details</label>
                    <input className="w-full lg:w-72 px-3 py-1 mt-2 rounded-md" type="text" id="details"  placeholder="Enter Coffee details"/>
                    </div>
                    
                </div>

                {/* ============ single row ========== */}
                <div className="text-center md:text-start mt-3">
                    <label htmlFor="photo" className="block">Photo</label>
                    <input className="w-full lg:w-[672px] px-3 py-1 mt-2 rounded-md" type="text" id="photo"  placeholder="Enter Coffee Photo"/>
                    </div>

                    {/* ================ Submit button =============== */}
                    <div className="py-2 lg:py-4 mt-2">
                        <button className="bg-[#967259] text-white w-full lg:w-[672px] rounded-md py-1 hover:bg-amber-500 border-2 border-slate-950">
                            Submit
                        </button>

                    </div>
               </div>

            </form>
           </div>
        </div>
    );
};

export default AddCoffee;