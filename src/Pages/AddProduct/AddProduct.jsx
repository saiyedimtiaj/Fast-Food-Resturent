import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const AddProduct = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const handleAddItem = async (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const quentity = parseInt(form.quentity.value);
    const price = parseInt(form.price.value);
    const userName = user?.displayName;
    const email = user?.email;
    const orgin = form.orgin.value;
    const description = form.description.value;
    const orderCount = 1;

    const item = {
      foodName,
      category,
      image,
      quentity,
      price,
      userName,
      email,
      orgin,
      description,
      orderCount,
    };
    axios
      .post("/all-food", item)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-7">Add a Food Item</h1>
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
              type="url"
              name="image"
              placeholder="Enter Image Here..."
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
                placeholder="Enter Food Category Here"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="mt-3 flex-1">
              <span className="font-medium">User Name</span>
              <input
                type="text"
                className="px-2 py-3 border-2 border-black w-full"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="mt-3 flex-1">
              <span className="font-medium">User Email</span>
              <input
                type="text"
                className="px-2 py-3 border-2 border-black w-full"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="w-full mt-3">
              <label htmlFor="food-Price" className="font-semibold">
                Orgin
              </label>
              <br />
              <input
                required
                type="text"
                name="orgin"
                placeholder="Enter Orgin"
                className="px-2 py-3 border-2 border-black w-full"
              />
            </div>
          </div>
          <div className="w-full mt-3">
            <label htmlFor="description" className="font-medium">
              Food Description
            </label>
            <br />
            <textarea
              name="description"
              rows="6"
              className="px-2 py-3 border-2 border-black w-full"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add Food"
            className="text-center cursor-pointer mt-5 mb-7 bg-blue-500 text-white py-3 w-full rounded font-medium hover:bg-blue-700"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
