import AllFoodBanner from "../../Components/AllFoodBanner/AllFoodBanner";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useEffect, useState } from "react";
import Scalition from "../../Components/Scalition/Scalition";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [allitem,setAllitem] = useState([])
  const [loading,setLoading] = useState(true)
  const axios = useAxios();
  const [count, setCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(0)
  const [size,setSize] = useState(9)
  const pagesCount = Math.ceil(count / size)
  const pages = [];
  for(let i = 0;i<pagesCount;i++){
    pages.push(i)
  }

  useEffect(()=>{
    axios.get(`/all-food?skip=${currentPage}&limit=${size}`)
    .then(res=>setAllitem(res.data))
  },[axios,currentPage,size])

  useEffect(() => {
    axios.get(`/productCount`).then((res) => {
      setCount(res.data.total)
      setLoading(false)
    });
  }, [axios]);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    const convertToLowercase = query.toLowerCase();
    setSearchQuery(convertToLowercase);
  };
  
  const handleSetPage = page => {
    setCurrentPage(page)
  }

  const handleNext = () => {
    if(currentPage < pages.length - 1){
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage-1)
    }
  }

  if(loading){
    return <Scalition/>
  }

  return (
    <>
    <Helmet>
      <title>Cafue | All Food</title>
    </Helmet>
    <div>
      <AllFoodBanner handleSearch={handleSearch} />
      <div className="grid grid-cols-1 gap-8 mt-20 mb-6 container mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 ">
        {allitem
          ?.filter((item) => {
            if (item.foodName.toLowerCase().includes(searchQuery)) {
              return item;
            }
          })
          .map((item) => (
            <FoodCard key={item._id} food={"allfood"} item={item}></FoodCard>
          ))}
      </div>
    </div>
     <div className="mx-auto text-center mb-20 space-x-2 text-white">
     <button className="bg-black text-white px-3 py-1" onClick={handlePrev}>prev</button>
     {
      pages?.map(page=><button onClick={()=>handleSetPage(page)} className={currentPage === page ? 'px-2 py-1 bg-yellow-500' : 'bg-black px-2 py-1'} key={page}>{page}</button>)
     }
     <button className="bg-black text-white px-3 py-1" onClick={handleNext}>Next</button>
     </div>
    </>
  );
};

export default AllFood;
