import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

 const { pictures, modal, onPhotoSelect, setIsFavPhotoExist,isFavPhotoExist, userFav, getFavPhotoId, favPhotos, onLoadTopic } = props
  
  
  
  
  

  
  
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
            pictures ={pictures} 
            getFavPhotoId={getFavPhotoId}
        />
      </>
    </div>
  );
};

export default HomeRoute;
