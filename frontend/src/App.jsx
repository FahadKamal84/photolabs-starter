import React, {useState, useCallback} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhotos, setFavPhotos] = useState([])
  const [selectPhoto, setSelectPhoto] = useState(null)
  const [selectTopic, setSelectTopic] = useState(null)
  const [photoData, setPhotoData] = useState(photos)
  const [topicData, setTopicData] = useState(topics)
  const [modal, setModal] = useState(false)
  
  

  const getFavPhotoId = (id) => {
    
    if (favPhotos.includes(id)) {
      setFavPhotos(favPhotos.filter(pId => pId !== id))
    } else { 
      setFavPhotos([...favPhotos, id])
    }
  }
  console.log(favPhotos)

  const onLoadTopic = (topicObj) => {
    setSelectTopic(topicObj)
  }
  console.log(selectTopic)

  const onCloseModal = () => {   
    setModal(false)
    setSelectPhoto(null)
    }

  const onPhotoSelect = (photo) => {
     setModal(true)
     setSelectPhoto(photo)
  }
    
    

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
