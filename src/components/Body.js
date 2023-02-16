import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
const filterData = (text, data, found) => {
  const newData = data.filter((single) =>
    single.data.name.toLowerCase().includes(text.toLowerCase())
  );
  // console.log(newData?.length);
  if (newData.length == 0) {
    found = false;
  } else {
    found = true;
  }
  // console.log(newData, found);
  return { newData, found };
};
const Body = () => {
  const [text, setText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [found, setFound] = useState(true);
  const handleChange = (e) => {
    setText(e.target.value);
    const data = filterData(text, restaurants, found);
    setFound(data.found);
    setFilterdRestaurant(data.newData);
  };
  const handleSearchClick = () => {
    const data = filterData(text, restaurants, found);
    setFound(data?.found);
    setFilterdRestaurant(data?.newData);
  };
  const getRestaurantData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0749777&lng=72.88477790000002&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterdRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  useEffect(() => {
    // console.log("useEffect");
    getRestaurantData();
  }, []);
  //
  return (
    <div>
      <div className="search-body">
        <input
          type="text"
          value={text}
          placeholder="Search your restaurant"
          onChange={handleChange}
        ></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {restaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="cards-layout">
          {found ? (
            filterdRestaurant?.map((single, index) => {
              return (
                <Link
                  id="menu-link"
                  to={"/restaurant/" + single.data.id}
                  key={index}
                >
                  <RestaurantCard {...single} />
                </Link>
              );
            })
          ) : (
            <h1>Not Found</h1>
          )}
        </div>
      )}
    </div>
  );
};
export default Body;
