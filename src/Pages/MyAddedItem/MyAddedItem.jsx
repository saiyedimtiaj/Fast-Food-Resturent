import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { Helmet } from "react-helmet";
import useAxios from "../../Hooks/useAxios";
import Scalition from "../../Components/Scalition/Scalition";

const MyAddedItem = () => {
  const [item, setItem] = useState([]);
  const { user } = useAuth();
  const [loading,setLoading] = useState(true)
  const axios = useAxios()
  useEffect(() => {
    axios.get(`http://localhost:5000/all-food?email=${user?.email}`)
      .then((res) => {
        setItem(res.data)
        setLoading(false)
      })
  }, [axios,user.email]);

  if(loading){
    return <Scalition/>
  }

  return (
    <>
    <Helmet>
                <title>Cafue | MyItem</title>
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
        <h1 className="text-3xl font-bold text-center text-white">My Added Product</h1>
      </div>
      {
        item.length === 0 &&  (
            <h1 className="text-6xl font bold my-20 text-center">You Are Not Add Any Item</h1>
          ) 
      }
      <div className="grid grid-cols-1 gap-8 mt-28 mb-20 container mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 ">
            {
                item?.map(item=><FoodCard key={item._id} food={'myaddeditem'} item={item}></FoodCard>)
            }
            </div>
    </>
  );
};

export default MyAddedItem;
