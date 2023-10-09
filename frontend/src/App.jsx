import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {


  const [modal, setModal] = useState("")
  const launchModal = () => setModal(modal === "" ? "yes" : "")
  return (
    <div className="App">
      {/*{ Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }*/}
     {/* { photoListArray } */}
     <HomeRoute launchModal = {launchModal} modal = {modal}/>
     {!!modal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
