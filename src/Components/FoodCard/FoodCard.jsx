/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Framer from "../Framer/Framer";

const FoodCard = ({ item,food }) => {
  return (
    <div className="border-2 border-black p-4">
      <Framer><img className="w-full h-60 mb-2" src={item?.image} alt="" /></Framer>
      <Framer><h2 className="text-xl font-bold">{item?.foodName}</h2></Framer>
      <div className="flex justify-between my-2">
        <Framer><h1 className="text-lg font-medium text-blue-600">#{item?.category}</h1></Framer>
        <Framer><h1 className="text-2xl font-bold">${item?.price}</h1></Framer>
      </div>
      <div className="text-center mt-3">
        <Link to={`/${food}/${item._id}`}>
        <Framer>
          <button className="text-white bg-black font-medium px-5 py-2 ">
            View Details
          </button>
          </Framer>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
