import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// import photos from "mocks/photos";

// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];

const PhotoList = (props) => {

  const { userFav, modal, launchModal, pictures, setFavPhotoId } = props;
  
  const photoListArray = pictures.map((photoData, index) => 

    <PhotoListItem 
      key = {index}
      id = {photoData.id}
      imageSourceLarge = {photoData.urls.full}
      imageSource = {photoData.urls.regular} 
       profile = {photoData.user.profile}
      username = {photoData.user.username}
       city = {photoData.location.city}
      country = {photoData.location.country}
      userFav = {userFav}
      modal = {modal}
      launchModal = {launchModal}
      similarPhotos = {photoData.similar_photos}
      setFavPhotoId={setFavPhotoId}
     />

  );
  

  return (
    <ul className="photo-list">
      
        {photoListArray}
      
  </ul>
  );
};

export default PhotoList;
