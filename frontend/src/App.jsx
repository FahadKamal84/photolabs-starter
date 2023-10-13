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

  const [id, setId] = useState(null)
  const [modal, setModal] = useState(false)
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
     <HomeRoute launchModal = {launchModal} modal = {modal}/>
     {modal && <PhotoDetailsModal 
                      launchModal = {launchModal}
                       photo = {photo}/>}
    </div>
  );
};

export default App;
