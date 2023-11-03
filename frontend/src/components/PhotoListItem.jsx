import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";
//import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {

  const { key, id, imageSource, profile, username, city, country, userFav, modal, launchModal, imageSourceFull, similarPhotos, setFavPhotoId } = props
  
  
  const handleClick = () => launchModal(id)
  return (
    <article className = "photo-list__item" >
      <PhotoFavButton userFav = {userFav} setFavPhotoId ={setFavPhotoId} id ={id}/> 
      <div onClick = {handleClick}>
        <img className = "photo-list__image" src = {imageSource} />
        <div className="photo-list__user-details" >
          <img className = "photo-list__user-profile" src = {profile}/>
          <span className="photo-list__user-info">{username}
            <p className="photo-list__user-location">
              {city}, 
              {country}
            </p>
          </span>
        </div>
      </div>
    </article>
  )
  /* Insert React */
};

export default PhotoListItem;
