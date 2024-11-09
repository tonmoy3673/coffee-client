

const Coffee = ({coffee}) => {
    const {name,chef,_id,photo,price}= coffee;
    return (
        <div className="flex items-center bg-slate-200 rounded-md">
            <div>
                <img src={photo}/>
            </div>
            <div>
                <h3><span className="font-semibold">Name</span> : {name}</h3>
                <h4><span className="font-semibold">Chef</span> : {chef}</h4>
                <p className="text-red-500"> <span className="font-semibold text-black">Price</span> : {price} $</p>
            </div>
        </div>
    );
};

export default Coffee;