import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { AiTwotoneDelete } from "react-icons/ai";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-hot-toast";

const MyOrder = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    isPending,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["myOrderItemsuhfrde"],
    queryFn: () =>
      axios(`/order?email=${user?.email}`,{credentials:'include'})
        .then((res) => res.data)
  });

  if (isPending) return "Loading...";
  

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  const handleDelete = (id) => {
    axios
      .delete(`/order/${id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          toast.success("Delete Food Sucessfully");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="my-20">
      <div className="max-w-6xl mx-auto px-5">
        {data.length === 0 && (
          <h1 className="text-4xl font-bold my-10 text-center">
            No Content Yet!
          </h1>
        )}
        {data?.map((food) => (
          <div
            key={food?._id}
            className="border-2 gap-5 my-3 flex flex-wrap justify-between items-center border-black px-3 py-2"
          >
            <img className="w-20 h-20" src={food?.image} alt="" />
            <h1 className="text-xl font-bold">{food?.foodName}</h1>
            <h1 className="text-2xl font-bold">${food?.price}</h1>
            <div className="text-center">
            <h1 className="underline font-bold">Order Date</h1>
            <h1 className="text-xl font-bold">{food?.date}</h1>
            </div>
            <button
              onClick={() => handleDelete(food?._id)}
              className="text-3xl mx-auto md:mx-0 lg:mr-6"
            >
              <AiTwotoneDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
