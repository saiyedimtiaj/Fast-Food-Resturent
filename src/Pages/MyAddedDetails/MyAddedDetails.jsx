import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const MyAddedDetails = () => {
  const product = useLoaderData();
  return (
    <>
    <Helmet>
      <title>Cafue | My Details</title>
    </Helmet>
      <div
        className=" h-[300px] px-5 flex flex-col justify-center"
        style={{
          backgroundImage: "url('../assets/image/page-ban-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold text-center text-white">Details Page</h1>
      </div>
      <div className="max-w-6xl my-28 items-center mx-auto px-5 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img className="w-full" src={product?.image} alt="" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-lg mb-2 ">
            Made by :
            <span className="uppercase  text-gray-600">
              {product?.userName}
            </span>
          </p>
          <h1 className="text-3xl font-bold">{product?.foodName}</h1>
          <p className="text-xl font-bold text-red-600 mt-2">
            #{product?.category}
          </p>
          <p className="my-2 text-lg font-semibold">
            <span className="text-red-600">Stock</span> : Abailable $
            {product.quantity} in stock<span></span>
          </p>
          <p className="font-medium text-justify mt-3">
            {product?.description}
          </p>
          <div className="flex items-center my-2 gap-10">
            <p className="text-2xl font-bold mt-2 text-blue-600">
              Made By : {product.origin}
            </p>
            <h1 className="text-2xl font-bold mt-3">
              Price : ${product?.price}
            </h1>
          </div>
          <Link to={`/myaddeditem/${product?._id}/update`}>
            <button className="text-white mt-4 bg-black font-medium px-5 py-2 ">
              Update
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyAddedDetails;
