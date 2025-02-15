import React, {useState, useCallback} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

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
                       favPhotos = {favPhotos}
                />}
    </div>
  );
};

export default App;
