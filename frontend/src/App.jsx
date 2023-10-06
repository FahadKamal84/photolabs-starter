import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {

// const photoListArray = [];
// for (let i = 0; i < 3; i++) {
// photoListArray.push(<PhotoListItem 
//   key = "1"
//   imageSource = {sampleDataForPhotoListItem.imageSource} 
//   profile = {sampleDataForPhotoListItem.profile}
//   username = {sampleDataForPhotoListItem.username}
//   city ={sampleDataForPhotoListItem.location.city}
//   country ={sampleDataForPhotoListItem.location.country}
// />)
// };


  return (
    <div className="App">
      {/*{ Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }*/}
     {/* { photoListArray } */}
     <HomeRoute/>
    </div>
  );
};

export default App;
