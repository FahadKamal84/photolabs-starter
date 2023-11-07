import React, {useState, useCallback} from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(0)
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

  // const userFav = (selected) => {

  //   (selected ? setIsFavPhotoExist(isFavPhotoExist + 1) : setIsFavPhotoExist(isFavPhotoExist - 1))
    
  // }

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
    
    // let photo = {}
    // if (id) {
    //   photo = photos.find(p => p.id === id)
    // }

  return (
    <div className="App">
      {/*{ Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }*/}
     {/* { photoListArray } */}
     <HomeRoute 
        onPhotoSelect = {onPhotoSelect} 
        modal = {modal} 
        setIsFavPhotoExist ={setIsFavPhotoExist} 
        //isFavPhotoExist ={isFavPhotoExist} 
        //userFav={userFav} 
        favPhotos={favPhotos}
        getFavPhotoId = {getFavPhotoId}
        topicData ={topicData}
        onLoadTopic = {onLoadTopic}/>
     {modal && <PhotoDetailsModal 
                      onCloseModal = {onCloseModal}
                       photo = {selectPhoto}
                       getFavPhotoId = {getFavPhotoId}/>}
    </div>
  );
};

export default App;
