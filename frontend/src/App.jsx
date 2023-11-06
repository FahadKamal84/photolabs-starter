import React, {useState, useCallback} from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(0)
  const [photoAll, setPhotoAll] = useState(photos)
  const [favPhotoIds, setFavPhotoIds] = useState([])
  const [id, setId] = useState(null)
  const [modal, setModal] = useState(false)
  
  

  const setFavPhotoId = (id) => {
    
    if (favPhotoIds.includes(id)) {
      setFavPhotoIds(favPhotoIds.filter(pId => pId !== id))
    } else { 
      setFavPhotoIds([...favPhotoIds, id])
    }
  }
  console.log(favPhotoIds)

  const userFav = (selected) => {

    (selected ? setIsFavPhotoExist(isFavPhotoExist + 1) : setIsFavPhotoExist(isFavPhotoExist - 1))
    
  }

  const launchModal = (id) => {   
    setModal(modal === false ? true : false)
    setId(id)
     console.log('id:', id) 

     
    }
    
    let photo = {}
    if (id) {
      photo = photos.find(p => p.id === id)
    }

  return (
    <div className="App">
      {/*{ Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }*/}
     {/* { photoListArray } */}
     <HomeRoute 
        launchModal = {launchModal} 
        modal = {modal} 
        setIsFavPhotoExist ={setIsFavPhotoExist} 
        isFavPhotoExist ={isFavPhotoExist} 
        userFav={userFav} 
        setFavPhotoId = {setFavPhotoId}/>
     {modal && <PhotoDetailsModal 
                      launchModal = {launchModal}
                       photo = {photo}
                       userFav ={userFav}/>}
    </div>
  );
};

export default App;
