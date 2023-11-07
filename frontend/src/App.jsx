import React, {useState, useCallback} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  
    


  return (
    <div className="App">
     <HomeRoute 
        onPhotoSelect = {onPhotoSelect} 
        modal = {modal} 
        //setIsFavPhotoExist ={setIsFavPhotoExist} 
        favPhotos={favPhotos}
        getFavPhotoId = {getFavPhotoId}
        onLoadTopic = {onLoadTopic}
      />
     {modal && <PhotoDetailsModal 
                      onCloseModal = {onCloseModal}
                       photo = {selectPhoto}
                       getFavPhotoId = {getFavPhotoId}
                />}
    </div>
  );
};

export default App;
