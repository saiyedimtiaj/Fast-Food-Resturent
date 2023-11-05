

const Highlight = () => {
    return (
        <div className=" h-[500px] px-5 my-16 flex flex-col justify-center" style={{backgroundImage:"url('../assets/image/offer-bg.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
            <h1 className="text-6xl font-bold max-w-xl text-white">We Have Excellent Of Quality Chicken</h1>
            <div>
            <button className="bg-yellow-500 mt-5 text-white px-5 py-2 rounded-md font-medium ">Order Now</button>
            </div>
        </div>
    );
};

export default Highlight;