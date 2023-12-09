import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Update = () => {
    const {user} = useAuth();
    const food = useLoaderData()
    const axios = useAxios()

    const handleAddItem = async (event) => {
        event.preventDefault()
        const form = event.target;
        const foodName = form.name.value;
        const category = form.category.value;
        const image = form.image.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const userName = user?.displayName
        const email = user?.email
        const origin = form.origin.value;
        const description = form.description.value;

        const item = {foodName,category,image,quantity,price,userName,email,origin,description}

        axios.patch(`/all-food/${food?._id}`,item)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount === 1){
                toast.success('update this product sucessfully')
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
               
    }

  return (
    <>
    <Helmet>
      <title>Cafue | Update</title>
    </Helmet>
      <h1 className="text-4xl font-bold text-center my-7">Update Food </h1>
      <div className="max-w-4xl mx-auto px-5 mb-20">
        <form onSubmit={handleAddItem}>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-full mt-3">
              <label htmlFor="food-name" className="font-semibold">
                Food Name
              </label>
              <br />
              <input
              required
              defaultValue={food?.foodName}
                type="text"
                name="name"
                placeholder="Enter Food Name Here"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
            <div className="w-full mt-3">
              <label htmlFor="food-category" className="font-semibold">
                Food Category
              </label>
              <br />
              <input
              required
              defaultValue={food?.category}
                type="text"
                name="category"
                placeholder="Enter Food Category Here"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="mt-3">
          <label htmlFor="food-image" className="font-semibold">
                Food Image
              </label>
              <br />
              <input
              required
              defaultValue={food?.image}
                type="url"
                name="image"
                placeholder="Enter Image Here..."
                className="px-2 py-3 border-2 border-black w-full"
              />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-full mt-3">
              <label htmlFor="food-quantity" className="font-semibold">
                Food quantity
              </label>
              <br />
              <input
              required
              defaultValue={food?.quantity}
                type="number"
                name="quantity"
                placeholder="Enter Food quantity Here"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
            <div className="w-full mt-3">
              <label htmlFor="food-Price" className="font-semibold">
                Food Price
              </label>
              <br />
              <input
              required
              defaultValue={food?.price}
                type="number"
                name="price"
                placeholder="Enter Food Category Here"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="mt-3 flex-1">
                <span className="font-medium">User Name</span>
                <h1 className="text-2xl font-semibold w-full bg-[#fce9c3] py-2 px-3 uppercase">{user?.displayName}</h1>
            </div>
            <div className="mt-3 flex-1">
                <span className="font-medium">User Email</span>
                <h1 className="text-2xl font-semibold w-full bg-[#fce9c3] py-2 px-3">{user?.email}</h1>
            </div>
            <div className="w-full mt-3">
              <label htmlFor="food-Price" className="font-semibold">
                origin
              </label>
              <br />
              <input
              required
                type="text"
                defaultValue={food?.origin}
                name="origin"
                placeholder="Enter origin"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="w-full mt-3">
            <label htmlFor="description" className="font-medium">Food Description</label><br />
            <textarea name="description" defaultValue={food?.description} rows="6" className="px-2 py-3 border-2 border-black w-full"></textarea>
          </div>
          <input
           type="submit" value='Update Food' className="text-center cursor-pointer mt-5 mb-7 bg-blue-500 text-white py-3 w-full rounded font-medium hover:bg-blue-700" />
        </form>
      </div>
    </>
  );
};

export default Update;
