import React, { useEffect } from "react";
import { CDN_IMG_URL } from "../utils/constants";


const MenuCards = ({ name, price, description, cloudinaryImageId }) => {
  return (
    // <div className="menu-body">
    <div className="menu-card">
      <div className="item-desc">
        <h2>{name}</h2>
        <p>Rs.{price / 100}</p>
        <p id="para">{description}</p>
      </div>
      <div className="item-img">
        {
          (cloudinaryImageId) ? <img
            src={CDN_IMG_URL + cloudinaryImageId}
            height="150px"
            width="200px"
          ></img> : null
        }
      </div>
    </div>
    // </div>
  );
};

export default MenuCards;
