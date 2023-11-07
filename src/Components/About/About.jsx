import Framer from "../Framer/Framer";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center container mx-auto px-5 my-10 lg:my16">
      <div className="flex-1">
        <img className="animate-pulse opacity-90"
          src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/about/3-about.png"
          alt=""
        />
      </div>
      <div className="flex-1">
        <Framer>
          <span className="text-2xl font-semibold">About Us</span>
        </Framer>
        <Framer>
          <h1 className="text-5xl font-bold max-w-2xl mt-2">
            We With The Aspects Food Professional Services
          </h1>
        </Framer>
        <Framer>
          <p className="text-gray-600 text-justify mt-3">
            Design of choice for many of the world’s leading enterprises end
            technology challengers. We help businesses elevate the alue ere is
            custom software to development, product design, sed apor lored
            incididcom modo nunc vel purusesfher commodo nunc vel purus
          </p>
        </Framer>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <Framer>
            <div className="flex items-center gap-4">
              <img
                src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/icon/3-7.png"
                alt=""
              />
              <div>
                <h2 className="text-2xl font-bold">Rating Star </h2>
                <p className="max-w-[150px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
              </div>
            </div>
          </Framer>
          <Framer>
            <div className="flex items-center gap-4">
              <img
                src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/icon/3-8.png"
                alt=""
              />
              <div>
                <h2 className="text-2xl font-bold">Free species </h2>
                <p className="max-w-[150px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
              </div>
            </div>
          </Framer>
        </div>
      </div>
    </div>
  );
};

export default About;
