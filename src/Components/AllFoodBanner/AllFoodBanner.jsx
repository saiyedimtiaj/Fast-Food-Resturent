/* eslint-disable react/prop-types */


const AllFoodBanner = ({handleSearch}) => {
    return (
        <div className="min-h-screen  flex flex-col justify-center px-5 mb-10 w-full mx-auto relative" style={{backgroundImage: "url('../assets/image/slider4_bg.jpg')",backgroundSize:'cover',backgroundPosition:'center'}}>
            <h1 className="text-5xl font-bold max-w-md text-white">Free Home Delivery Within an Hour</h1>
            <form onSubmit={handleSearch} className="mt-4 w-full flex">
                <input name="query" type="text" placeholder="Search Food..." className="px-3 py-2 boder-2 border-black rounded-l md:w-[300px]" />
                <input type="submit" value='Search' className="px-4 py-2 bg-yellow-500 text-white font-medium cursor-pointer" />
            </form>
        </div>
    );
};

export default AllFoodBanner;