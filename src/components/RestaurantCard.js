import React, { useState, useEffect } from "react";
import { CDN_IMG_URL } from "../utils/constants";
import "react-loading-skeleton/dist/skeleton.css";
const RestaurantCard = ({ data }) => {
    const {
      name,
      cuisines,
      costForTwoString,
      deliveryTime,
      avgRating,
      cloudinaryImageId,
    } = data;
  return(
    <div className="cards">
      <div className="upper-part-cards">
          <img src={CDN_IMG_URL + cloudinaryImageId}></img>
        <p id="name-card">{name}</p>
        <p className="opaque-text">
          {cuisines.join(", ")}
        </p>
      </div>
      <div className="res-data">
        <span id="rating">
          {avgRating}
          <img src="https://img.icons8.com/material-sharp/13/null/filled-star.png" />
        </span>
        <span className="res-data-styling">
          {" "}
          | {deliveryTime}mins
        </span>
        <span className="res-data-styling">
          {" "}
          | {costForTwoString}
        </span>
      </div>
      <div></div>
    </div>
  );
};
export default RestaurantCard;
