import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Scalition from "../Scalition/Scalition";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

const TopSell = () => {
  const axios = useAxios();
  const { isPending, error, data } = useQuery({
    queryKey: ["topsell"],
    queryFn: () =>
      axios
        .get(`/all-food?sortby=orderCount&sortOrder=desc&limit=6`)
        .then((res) => res.data),
  });

  if (isPending) return <Scalition />;

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <>
    <div>
      <h1 className="text-5xl font-bold text-center mt-16 mb-14">
        Top Sell Product
      </h1>
      <div className="grid grid-cols-1 gap-8 mb-14 container mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 ">
        {data
          ?.map((item) => (
            <FoodCard key={item._id} food={"allfood"} item={item}></FoodCard>
          ))}
      </div>
    </div>
      <div className="mx-auto mb-20 text-center"><Link to='allfood' className="px-9 py-3 text-xl font-medium bg-blue-500 text-white">See All</Link></div>
      </>
  );
};

export default TopSell;
