import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";

const HomeRoute = (props) => {

 const { modal, onPhotoSelect, setIsFavPhotoExist,isFavPhotoExist, userFav, getFavPhotoId, favPhotos, onLoadTopic } = props
  
  
  
  
  

  
  
  return (
    <div className="home-route">
      <>
        <TopNavigation  
          favPhotos={favPhotos}
          onLoadTopic = {onLoadTopic}
        />
        <PhotoList  
            onPhotoSelect = {onPhotoSelect} 
            modal = {modal} 
            pictures ={photos} 
            getFavPhotoId={getFavPhotoId}
        />
      </>
    </div>
  );
};

export default HomeRoute;
