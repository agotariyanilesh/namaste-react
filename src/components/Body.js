import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {

    let [listOfRestaurants, setListOfRestraunt] = useState([]);
    let [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    fetchData = async () => 
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0792552&lng=72.6039394&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRestraunt(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(listOfRestaurants.length === 0){
        return <h1>Loading</h1>;
    }

    return (
        <div className="body">
                <div className="filter">
                    {/* <button className="filter-btn" onClick={()=>{
                        let filterdList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                        setListOfRestraunt(filterdList);
                    }}>Top Rated</button> */}

                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />

                    <button onClick={()=>
                        {
                            if(searchText=="")
                            {   
                                console.log(listOfRestaurants);
                                setListOfRestraunt(listOfRestaurants);    
                            }
                            else
                            {
                                let filterdList = listOfRestaurants.filter((res)=>res.info.name == searchText);
                                setListOfRestraunt(filterdList);
                            }
                        }}>Search</button>

                </div>
                <div className="res-container">
                    
                    {listOfRestaurants.map((restaurant)=>( <RestaurantCard key={restaurant.info.id} resData={restaurant}/> ))}
                    
                </div>
        </div>
    )
}

export default Body;