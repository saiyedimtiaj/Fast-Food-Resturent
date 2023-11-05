const News = () => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <h1 className="mb-7 text-center font-bold text-5xl">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 ">
          <div className="shadow-md p-5 rounded-md">
            <img
              className="h-72 w-full"
              src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/blog/1.png"
              alt=""
            />
            <h5 className="text-2xl mt-1 mb-2 font-bold">
              New Restaurant Town Our Ple Awardb Contract
            </h5>
            <p>
              Drive your business and manage ris with a global industry leader.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg mt-2 font-bold text-gray-600">
                July 7, 2023
              </p>
              <button className="mt-3 font-bold border-b-2 border-black">
                READ MORE
              </button>
            </div>
          </div>
          <div className="shadow-md p-5 rounded-md">
            <img
              className="h-72 w-full"
              src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/blog/4.png"
              alt=""
            />
            <h5 className="text-2xl mt-1 mb-2 font-bold">
              New Restaurant Town Our Ple Award Contract
            </h5>
            <p>
              Drive your business and manage ris with a global industry leader.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg mt-2 font-bold text-gray-600">
                May 26, 2023
              </p>
              <button className="mt-3 font-bold border-b-2 border-black">
                READ MORE
              </button>
            </div>
          </div>
          <div className="shadow-md p-5 rounded-md">
            <img
              className="h-72 w-full"
              src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/blog/3.png"
              alt=""
            />
            <h5 className="text-2xl mt-1 mb-2 font-bold">
              Greek yogurt breakfast bowls Ple Award Contract
            </h5>
            <p>
              {" "}
              Drive your business and manage ris with a global industry leader.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg mt-2 font-bold text-gray-600">
                January 20, 2023
              </p>
              <button className="mt-3 font-bold border-b-2 border-black">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
