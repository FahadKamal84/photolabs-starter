import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

 const { pictures, modal, onPhotoSelect, setIsFavPhotoExist,isFavPhotoExist, userFav, getFavPhotoId, favPhotos, onLoadTopic, topics } = props
  
  
  
  
  

  
  
  return (
    <div className="home-route">
      <>
        <TopNavigation  
          favPhotos={favPhotos}
          onLoadTopic = {onLoadTopic}
          topics = {topics}
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
