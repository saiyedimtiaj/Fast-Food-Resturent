import { useLoaderData } from "react-router-dom";

const OrderedFood = () => {
    const product = useLoaderData();
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-16">Order Now!</h1>
      <div className="mb-16 mx-auto p-5 max-w-4xl">
        <form>
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
        </form>
      </div>
    </>
  );
};

export default OrderedFood;
