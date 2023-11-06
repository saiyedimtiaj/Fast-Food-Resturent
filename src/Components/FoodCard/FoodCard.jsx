/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FoodCard = ({ item,food }) => {
  return (
    <div className="border-2 border-black p-4">
      <img className="w-full h-60 mb-2" src={item?.image} alt="" />
      <h2 className="text-xl font-bold">{item?.foodName}</h2>
      <div className="flex justify-between my-2">
        <h1 className="text-lg font-medium text-blue-600">#{item?.category}</h1>
        <h1 className="text-2xl font-bold">${item?.price}</h1>
      </div>
      <div className="text-center mt-3">
        <Link to={`/${food}/${item._id}`}>
          <button className="text-white bg-black font-medium px-5 py-2 ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
