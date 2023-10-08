import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const { key, imageSource, profile, username, city, country, userFav } = props
  return (
    <article className = "photo-list__item" >
      <PhotoFavButton userFav = {userFav} key = {key}/> 
      <img className = "photo-list__image" src = {imageSource} />
      <div className="photo-list__user-details">
        <img className = "photo-list__user-profile" src = {profile}/>
        <span className="photo-list__user-info">{username}
          <p className="photo-list__user-location">
            {city}, 
            {country}
          </p>
        </span>
      </div>
    </article>
  )
  /* Insert React */
};

export default PhotoListItem;
