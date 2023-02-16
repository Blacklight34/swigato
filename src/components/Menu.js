import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../utils/constants";
import MenuCards from "./MenuCards";
import Skeleton from "react-loading-skeleton";
const getFilteredData = (text, data) => {
  return data.filter(single => single.name.toLowerCase().includes(text.toLowerCase()))
} 
const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurantData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=19.0749777&lng=72.88477790000002&menuId=" +
          id
      );
      const json = await data.json();
      const toArrayFromObj = Object.values(json?.data?.menu?.items);
      setRestaurantData(json.data);
      setMenu(toArrayFromObj);
      setFilteredMenu(toArrayFromObj);
      console.log(filteredMenu);
      console.log(restaurant);
    } catch (e) {
      console.log(e);
    }
  };
  const handleClick = () => {
    const filData = getFilteredData(searchText, menu);
    setFilteredMenu(filData)
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <div className="info-band">
        {CDN_IMG_URL ? (
          <img src={CDN_IMG_URL + restaurant.cloudinaryImageId}></img>
        ) : (
          <Skeleton
            height={165}
            width={254}
            baseColor="#202020"
            highlightColor="#444"
          />
        )}
        <div className="restaurant-band-info">
          <h1>{restaurant?.name || <Skeleton width={70} />}</h1>
          <p>{restaurant?.cuisines?.join(",") || <Skeleton width={70} />}</p>
          <p>
            {restaurant?.locality},{restaurant?.areaSlug} | Change Outlet{" "}
          </p>
          <div className="band-rat-time-cost">
            <div className="rating">
              <div className="rating-stars">
                <img src="https://img.icons8.com/material-sharp/13/null/filled-star.png" />
                <span>{restaurant?.avgRating || <Skeleton width={70} />}</span>
              </div>
              <span>
                {restaurant.totalRatingsString || <Skeleton width={70} />}
              </span>
            </div>
            <div className="delivery-info">
              <p>
                {restaurant?.sla?.deliveryTime || <Skeleton width={70} />} min
              </p>
              <p>Delivery Time</p>
            </div>
            <div className="cost">
              <p>{restaurant?.costForTwo / 100} Rs</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div>
      </div>
      <div className="search-body">
        <input
          type="text"
          value={searchText}
          placeholder="Search for dishes"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
      <>
        {filteredMenu.map((single) => {
          return <MenuCards {...single} key={single.id} />;
        })}
      </>
    </div>
  );
};
export default Menu;
