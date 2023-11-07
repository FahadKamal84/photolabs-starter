import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";
//import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {

  const { key, id, userFav, modal, onPhotoSelect, imageSourceFull, similarPhotos, getFavPhotoId, photo } = props
  
  
  const handleClick = () => onPhotoSelect(photo)
  return (
    <article className = "photo-list__item" >
      <PhotoFavButton /*userFav = {userFav}*/ getFavPhotoId ={getFavPhotoId} id ={id}/> 
      <div onClick = {handleClick}>
        <img className = "photo-list__image" src = {photo.urls.regular} />
        <div className="photo-list__user-details" >
          <img className = "photo-list__user-profile" src = {photo.user.profile}/>
          <span className="photo-list__user-info">{photo.user.username}
            <p className="photo-list__user-location">
              {photo.location.city}, 
              {photo.location.country}
            </p>
          </span>
        </div>
      </div>
    </article>
  )
  /* Insert React */
};

export default PhotoListItem;
