import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  const { modal, onPhotoSelect, pictures, getFavPhotoId, favPhotos } = props;
  
  const photoListArray = pictures.map((photo, index) => 

    <PhotoListItem 
      key = {index}
      id = {photo.id}
      photo = {photo}
      modal = {modal}
      onPhotoSelect = {onPhotoSelect}
      getFavPhotoId={getFavPhotoId}
      favPhotos = {favPhotos}
     />

  );
  

  return (
    <ul className="photo-list">
      
        {photoListArray}
      
  </ul>
  );
};

export default PhotoList;
