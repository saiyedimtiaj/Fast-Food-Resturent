import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="bg-[#fffaf0]">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center container mx-auto pt-8 justify-between gap-10 lg:flex-row min-h-[calc(100vh-90px)] px-5">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-5">
                The Best Food Monger in Your city Area
              </h1>
              <p className="text-gray-500 mt-4">
              Unlock culinary excellence with our restaurant management website. Seamlessly manage reservations, streamline operations, and elevate your dining experience.
                .
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/slider/banner-7.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center container mx-auto pt-8 justify-between gap-10 lg:flex-row min-h-[calc(100vh-90px)] px-5">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-5">
                Assian Lettuce Erap Chopped Salad Recipe
              </h1>
              <p className="text-gray-500 mt-4">
              Enhance your restaurants performance with our management website. Effortlessly handle reservations, streamline operations, and create unforgettable dining moments.
                .
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/slider/banner-8.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center container mx-auto pt-8 justify-between gap-10 lg:flex-row min-h-[calc(100vh-90px)] px-5">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-5 leading-tight">
                Defferent Spice For a Defferent Test
              </h1>
              <p className="text-gray-500 mt-4">
              Experience culinary perfection with our restaurant management website. Elevate your service, manage reservations, and streamline operations for dining at its finest.
                .
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/slider/banner-9.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
