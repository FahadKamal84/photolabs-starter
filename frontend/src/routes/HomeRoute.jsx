import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {

 const { modal, onPhotoSelect, setIsFavPhotoExist,isFavPhotoExist, userFav, setFavPhotoId } = props
  
  
  
  
  

  //const userFav = (selected) => (setIsFavPhotoExist(selected === "" ? "yes" : ""))
  console.log(isFavPhotoExist);
  return (
    <div className="home-route">
      <>
        <TopNavigation isFavPhotoExist = {isFavPhotoExist}/>
        <PhotoList userFav = {userFav} onPhotoSelect = {onPhotoSelect} modal = {modal} pictures ={photos} setFavPhotoId={setFavPhotoId}/>
      </>
    </div>
  );
};

export default HomeRoute;
