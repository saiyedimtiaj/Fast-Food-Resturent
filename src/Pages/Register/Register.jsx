import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth'
import { updateProfile } from "firebase/auth";
import auth from "../../Config/Firebase.config";
import { toast } from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
    const {register,signinWithGoogle} = useAuth();
    const navegate = useNavigate()
    const location = useLocation()
    const axios = useAxios()

    const handleGoogle = () => {
      signinWithGoogle()
      .then(()=>{
        navegate(location.state ? location.state : '/');
        toast.success('log in sucessfully')
      })
      .catch(err=>{
        toast.error(err.message)
      })
    }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;


    if(!/[A-Z]/.test(password)){
      return toast.error('Password Must a Uppercase')
    }
    if(!/[.!@#$%^&*()_+-=]/.test(password)){
      return toast.error('Password Must a  special Character')
    }
    if(!/[0-9]/.test(password)){
      return toast.error('Password Must a Number')
    }

    register(email,password)
    .then((res)=>{
        updateProfile(auth.currentUser,{
          displayName: name,
          photoURL:image
        }).then(()=>{
          navegate(location.state ? location.state : '/');
        })
        toast.success('Sign Up Account Successfully')
        const createdAt = res?.data?.createdAt
        axios.post('/user',{name,email,createdAt})
        .then()
        .catch()
    })
    .catch(err=>{
      toast.error(err.message);
    })
  };

  return (
    <div className="container mx-auto px-5 my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
      <div className="">
        <h1 className="text-5xl font-semibold ">
          Welcome to <br /> Ecommerce
        </h1>
        <img
          className="lg:h-[400px]"
          src="../assets/image/Mobile login-pana.png"
          alt=""
        />
      </div>
      <div className="flex-1 max-w-xl bg-[#f0eded] px-7 py-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Sign Up Now..</h1>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="name">
                Your Name
              </label>{" "}
              <br />
              <input
                required
                type="text"
                name="name"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Enter Your Name..."
              />
            </div>
            <div className="flex-1 w-full">
              <label className="font-bold " htmlFor="image">
                Image
              </label>{" "}
              <br />
              <input
                required
                type="url"
                name="image"
                className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
                placeholder="Image url here..."
              />
            </div>
          </div>
          <label className="font-bold " htmlFor="email">
            Your Email
          </label>{" "}
          <br />
          <input
            required
            type="email"
            name="email"
            className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
            placeholder="Enter email here..."
          />
          <label className="font-bold " htmlFor="email">
            Password
          </label>{" "}
          <br />
          <input
            required
            type="password"
            name="password"
            className="py-2 px-3 mt-1 w-full rounded-sm"
            placeholder="Enter Password here..."
          />
          <input
            required
            type="submit"
            value="Sign In"
            className="w-full py-2 rounded bg-green-600 font-medium mt-5 text-white cursor-pointer text-lg"
          />
        </form>
        <p className="my-2 text-center font-medium">or</p>
        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 py-2 rounded border-black border font-medium cursor-pointer text-lg">
          <p className="text-xl">
            <FcGoogle />
          </p>
          <p>Sign in with Google</p>
        </button>
        <p className="font-bold mt-1">
          Already have an Account?
          <Link to="/login" className="text-red-600">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
