import { useQuery } from "@tanstack/react-query";
import AllFoodBanner from "../../Components/AllFoodBanner/AllFoodBanner";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useState } from "react";


const AllFood = () => {
    const [searchQuery,setSearchQuery] = useState([]);

    const handleSearch = event => {
        event.preventDefault()
        const query = event.target.query.value;
        const convertToLowercase = query.toLowerCase();
        setSearchQuery(convertToLowercase);
    }

    const { isPending, error, data:allitem } = useQuery({
        queryKey: ['allfood'],
        queryFn: () =>
          fetch('http://localhost:5000/all-food').then(
            (res) => res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <AllFoodBanner handleSearch={handleSearch} />
            <div className="grid grid-cols-1 gap-8 mt-28 mb-20 max-w-5xl mx-auto px-5 md:grid-cols-2 lg:grid-cols-3 ">
            {
                allitem?.filter(item=>{
                    if(item.foodName.toLowerCase().includes(searchQuery)){
                        return item
                    }
                }).map(item=><FoodCard key={item._id} food={'allfood'} item={item}></FoodCard>)
            }
            </div>
        </div>
    );
};

export default AllFood;