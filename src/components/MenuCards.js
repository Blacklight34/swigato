import React, { useEffect } from "react";
import { CDN_IMG_URL } from "../utils/constants";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
const MenuCards = ({ name, price, description, cloudinaryImageId }) => {
  console.log(cloudinaryImageId);
  console.log(CDN_IMG_URL);
  const [resName, changeName] = useState(null);
  const [resPrice, changePrice] = useState(null);
  const [resDescription, changeDes] = useState(null);
  const [resCloudinaryImageId, changeId] = useState(null);
  useEffect(() => {
    setInterval(() => {
      changeName(name);
      changePrice(price);
      changeId(cloudinaryImageId);
      changeDes(description);
    }, 2000);
  }, []);
  return (
    <div className="menu-body">
    <div className="menu-card">
      <div className="item-desc">
        <h2>{resName || <Skeleton width={100} />}</h2>
        <p>Rs.{resPrice / 100 || <Skeleton width={100} />}</p>
        <p id="para">{resDescription || <Skeleton width={100} />}</p>
      </div>
      <div className="item-img">
        {
          (resCloudinaryImageId) ? <img
            src={CDN_IMG_URL + resCloudinaryImageId}
            height="150px"
            width="200px"
          ></img> : null
        }
      </div>
    </div>
    </div>
  );
};

export default MenuCards;
