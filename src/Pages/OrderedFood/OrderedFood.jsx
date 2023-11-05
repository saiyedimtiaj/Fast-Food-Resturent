import axios from "axios";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const OrderedFood = () => {
    const product = useLoaderData();
    const {user} = useAuth();

    const handleOrder = event => {
      event.preventDefault();
      const form = event.target;
      const foodName = form.foodName.value;
      const quentity = parseInt(form.quentity.value);
      const price = form.price.value;
      const userName = user?.userName;
      const email = user?.email;
      const image = product?.image;
      const orderItem = {foodName,quentity,price,userName,email,image};

      if(user.email === product.email){
        return toast.error(`you Can't add this Item`)
      }
      else{
        axios.post('http://localhost:5000/order',orderItem)
      .then(res=>{
        toast.success('Your product is order Now ')
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
      }
    }
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-16">Order Now!</h1>
      <div className="mb-16 mx-auto p-5 max-w-4xl">
        <form onSubmit={handleOrder}>
          <div className="w-full mt-3">
            <label htmlFor="food-Price" className="font-semibold">
              Food Name
            </label>
            <br />
            <input
              required
              type="text"
              name="foodName"
              defaultValue={product?.foodName}
              placeholder="Enter Food Category Here"
              className="px-2 py-3 border-2 border-black w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-full mt-3">
              <label htmlFor="food-quentity" className="font-semibold">
                Food Quentity
              </label>
              <br />
              <input
              required
                type="number"
                name="quentity"
                placeholder="Enter Food Quentity Here"
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
                type="number"
                name="price"
                defaultValue={product?.price}
                placeholder="Enter Food Price..."
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-full mt-3">
              <label htmlFor="food-quentity" className="font-semibold">
                User Name
              </label>
              <br />
              <input
              required
              readOnly
                type="text"
                name="userName"
                defaultValue={product?.userName}
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
            <div className="w-full mt-3">
              <label htmlFor="food-quentity" className="font-semibold">
                User Email
              </label>
              <br />
              <input
              required
              readOnly
                type="text"
                name="email"
                defaultValue={product?.email}
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
            
          </div>
          <input
           type="submit" value='purchase Now' className="text-center cursor-pointer mt-5 mb-7 bg-blue-500 text-white py-3 w-full rounded font-medium hover:bg-blue-700" />
        </form>
      </div>
    </>
  );
};

export default OrderedFood;
