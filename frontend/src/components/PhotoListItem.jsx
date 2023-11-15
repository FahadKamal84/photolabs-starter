import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const { id, onPhotoSelect, getFavPhotoId, favPhotos, photo } = props
  
  return (
    <article className = "photo-list__item" >
      <PhotoFavButton getFavPhotoId ={getFavPhotoId} favPhotos = {favPhotos} id ={id}/> 
      <div onClick = {() => onPhotoSelect(photo)}>
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
};

export default PhotoListItem;
