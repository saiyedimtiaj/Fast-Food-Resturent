import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EEEDEB] text-black pt-14 pb-3 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div>
          <img
            className="mb-4"
            src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/logo/logo-3.png"
            alt=""
          />
          <p className="font-medium mt-3">
            Efficient Eats: Streamlined Restaurant Management Solutions for Your
            Culinary Business Success
          </p>
        </div>
        <div>
          <span className="text-3xl font-semibold pb-1 border-b-4 border-red-500">
            Usefull Links
          </span>{" "}
          <br />
          <div className="text-lg text-gray-600 font-medium mt-5">
            <p>Home</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contuct Us</p>
          </div>
        </div>

        <div>
          <span className="text-3xl font-semibold pb-1 border-b-4 border-red-500">
          Get In Touch
          </span>{" "}
          <br />
          <div className="mt-5">
            <h1 className="text-red-800 font-bold">Email : </h1>
            <p>Supportteam@shangrila.com</p>
            <h1 className="text-red-800 font-bold mt-2">Phone : </h1>
            <p>Tollfree: 888-7010-7010</p>
          </div>
        </div>

        <div>
        <span className="text-3xl font-semibold pb-1 border-b-4 border-red-500">
        We Are Social
          </span>{" "}
          <br />
          <div className="mt-5">
            <p className="flex gap-1 items-center text-lg font-semibold text-black"><FaFacebookF></FaFacebookF>Facebook</p>
            <p className="flex gap-1 items-center text-lg font-semibold text-black"><FaTwitter></FaTwitter>Twiter</p>
            <p className="flex gap-1 items-center text-lg font-semibold text-black"><FaInstagram></FaInstagram>Instagram</p>
            <p className="flex gap-1 items-center text-lg font-semibold text-black"><FaYoutube></FaYoutube>Youtube</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-black cursor-pointer text-center md:text-left">
          © 2023 Cafue, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className={`text-black text-[12px] cursor-pointer`}>Guides</div>
          <div className={`text-black text-[12px] cursor-pointer`}>
            Terms of Sale
          </div>
          <div className={`text-black text-[12px] cursor-pointer`}>
            Terms of Use
          </div>
          <div className={`text-black text-[12px] cursor-pointer`}>
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </div>
    </footer>
  );
};

export default Footer;
