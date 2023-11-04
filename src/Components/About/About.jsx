

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center px-5 my-10 lg:my16">
            <div className="flex-1">
                <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/about/3-about.png" alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-semibold">About Us</h2>
                <h1 className="text-5xl font-bold max-w-2xl mt-2">We With The Aspects Food Professional Services</h1>
                <p className="text-gray-600 text-justify mt-3">Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software to development, product design, sed apor lored incididcom modo nunc vel purusesfher commodo nunc vel purus</p>
                <div className="grid grid-cols-2 gap-5 mt-7">
                    <div className="flex items-center gap-4">
                        <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/icon/3-7.png" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold">Rating Star </h2>
                            <p className="max-w-[150px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/icon/3-8.png" alt="" />
                        <div>
                            <h2 className="text-2xl font-bold">Free species </h2>
                            <p className="max-w-[150px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;