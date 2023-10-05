import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const { imageSource, profile, username, city, country } = props
  return (
    <article>
      <img src = {imageSource} />
      <img src = {profile}/>
      <span>{username}</span> <br></br>
      {city}, 
      {country}
    </article>
  )
  /* Insert React */
};

export default PhotoListItem;
