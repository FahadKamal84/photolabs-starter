import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const {onLoadTopic, topics} = props
  const topicArray = topics.map((topic)=> 
    <TopicListItem 
      key = {topic.id}
      topic = {topic}
      onLoadTopic = {onLoadTopic}
      />
      
  );
  
  return (
    <div className="top-nav-bar__topic-list">
    
      {topicArray}
    
    </div>
  );
};

export default TopicList;
