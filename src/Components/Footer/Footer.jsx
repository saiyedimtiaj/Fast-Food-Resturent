import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className='bg-[#EEEDEB] text-black pt-14 pb-3 px-5'
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div>
          <img className="mb-4" src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/logo/logo-3.png" alt="" />
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
            Find a store
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
            become a partner
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
            sign up for email
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
            send us feedback
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
            student discount
          </div>
        </div>
        <div>
          <div className="font-oswald font-medium uppercase text-sm">
            get help
          </div>
          <div className="text-sm cursor-pointer">
            Order Status
          </div>
          <div className="text-sm cursor-pointer">
            Delivery
          </div>
          <div className="text-sm cursor-pointer">
            Returns
          </div>
          <div className="text-sm cursor-pointer">
            Payment Options
          </div>
          <div className="text-sm cursor-pointer">
            Contact Us
          </div>
        </div>
        <div>
          <div className="font-oswald font-medium uppercase text-sm">
            About nike
          </div>
          <div className="text-sm cursor-pointer">
            News
          </div>
          <div className="text-sm cursor-pointer">
            Careers
          </div>
          <div className="text-sm cursor-pointer">
            Investors
          </div>
          <div className="text-sm cursor-pointer">
            Sustainability
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <p className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </p>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className='text-black cursor-pointer text-center md:text-left'>
          © 2023 Cafue, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className={`text-black text-[12px] cursor-pointer`}>
            Guides
          </div>
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
