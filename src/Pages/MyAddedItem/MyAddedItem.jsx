import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import FoodCard from "../../Components/FoodCard/FoodCard";

const MyAddedItem = () => {
  const [item, setItem] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/all-food")
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((item) => item.email === user?.email);
        setItem(filter);
      });
  }, [user.email]);
  console.log(item);
  return (
    <>
      <div
        className=" h-[300px] px-5 flex flex-col justify-center"
        style={{
          backgroundImage: "url('../assets/image/page-ban-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold text-center text-white">My Added Product</h1>
      </div>
      {
        item.length === 0 &&  (
            <h1 className="text-6xl font bold my-20 text-center">You Are Not Add Any Item</h1>
          ) 
      }
      <div className="grid grid-cols-1 gap-8 mt-28 mb-20 max-w-5xl mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 ">
            {
                item?.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
    </>
  );
};

export default MyAddedItem;
