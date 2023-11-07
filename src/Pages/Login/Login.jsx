import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
    const {signin,signinWithGoogle} = useAuth()
    const navegate = useNavigate();
    const location = useLocation();

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

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signin(email,password)
        .then(()=>{
          navegate(location.state ? location.state : '/');
          toast.success('Log In Sucessfully')
        })
        .catch(err=>{
            toast.error(err.message);
        })
    } 

  return (
    <div className="container mx-auto px-5 my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
      <div className="">
        <h1 className="text-5xl font-semibold ">
          Hey there! <br /> Welcome back
        </h1>
        <img
          className="lg:h-[400px]"
          src="../assets/image/Developer activity-bro.png"
          alt=""
        />
      </div>
      <div className="flex-1 max-w-sm bg-[#f0eded] px-7 py-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-5">Sign In</h1>
        <form onSubmit={handleLogin}>
          <label className="font-bold " htmlFor="email">
            Your Email
          </label>{" "}
          <br />
          <input
            type="email"
            required
            name="email"
            className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
            placeholder="Enter email here..."
          />
          <label className="font-bold " htmlFor="email">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            required
            className="py-2 px-3 mt-1 w-full rounded-sm"
            placeholder="Enter Password here..."
          />
          <input
            type="submit"
            value="Sign In"
            className="w-full py-3 rounded bg-green-600 font-medium mt-5 text-white cursor-pointer text-lg"
          />
        </form>
        <p className="my-2 text-center font-medium">or</p>
        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 py-3 rounded border-black border font-medium cursor-pointer text-lg">
          <p className="text-2xl">
            <FcGoogle />
          </p>
          <p>Sign in with Google</p>
        </button>
        <p className="font-bold mt-1">
          Dont have any Account?
          <Link to="/register" className="text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
