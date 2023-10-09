import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

 const { modal, launchModal } = props
  const [isFavPhotoExist, setIsFavPhotoExist] = useState("")
  //setIsFavPhotoExist(selected === "" ? "" : "yes")

  const userFav = (selected) => {
    for (let select of selected) {
      if (select) {
        return setIsFavPhotoExist("")
      } 
    }
    return setIsFavPhotoExist("yes")
  }
  

  //const userFav = (selected) => (setIsFavPhotoExist(selected === "" ? "yes" : ""))
  console.log(isFavPhotoExist);
  return (
    <div className="home-route">
      <>
        <TopNavigation isFavPhotoExist = {isFavPhotoExist}/>
        <PhotoList userFav = {userFav} launchModal = {launchModal} modal = {modal}/>
      </>
    </div>
  );
};

export default HomeRoute;
