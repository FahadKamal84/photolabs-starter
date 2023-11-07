import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {

 const { modal, onPhotoSelect, setIsFavPhotoExist,isFavPhotoExist, userFav, getFavPhotoId, favPhotos } = props
  
  
  
  
  

  //const userFav = (selected) => (setIsFavPhotoExist(selected === "" ? "yes" : ""))
  
  return (
    <div className="home-route">
      <>
        <TopNavigation isFavPhotoExist = {isFavPhotoExist} favPhotos={favPhotos}/>
        <PhotoList //userFav = {userFav} 
            onPhotoSelect = {onPhotoSelect} 
            modal = {modal} 
            pictures ={photos} 
            getFavPhotoId={getFavPhotoId}/>
      </>
    </div>
  );
};

export default HomeRoute;
