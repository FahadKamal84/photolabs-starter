import React, {useState, useCallback} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
//import photos from 'mocks/photos';
//import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    getFavPhotoId,
    onLoadTopic,
    clearLoadTopic,
    onCloseModal,
    onPhotoSelect
  } = useApplicationData();
    
  const {
    favPhotos,
    selectPhoto,
    selectTopic,
    photoData,
    topicData,
    modal
  } = state

  
  

  return (
    <div className="App">
     <HomeRoute 
        pictures = {photoData}
        onPhotoSelect = {onPhotoSelect} 
        modal = {modal} 
        //setIsFavPhotoExist ={setIsFavPhotoExist} 
        favPhotos={favPhotos}
        getFavPhotoId = {getFavPhotoId}
        onLoadTopic = {onLoadTopic}
        clearLoadTopic = {clearLoadTopic}
        topics = {topicData}
      />
     {modal && <PhotoDetailsModal 
                      onCloseModal = {onCloseModal}
                       selectPhoto = {selectPhoto}
                       getFavPhotoId = {getFavPhotoId}
                />}
    </div>
  );
};

export default App;
