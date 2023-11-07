const useApplicationData = () => {
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

}