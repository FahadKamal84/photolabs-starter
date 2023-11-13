import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

 const { pictures, modal, onPhotoSelect, getFavPhotoId, favPhotos, onLoadTopic, clearLoadTopic, topics } = props
  
  return (
    <div className="home-route">
      <>
        <TopNavigation  
          favPhotos={favPhotos}
          onLoadTopic = {onLoadTopic}
          clearLoadTopic = {clearLoadTopic}
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
