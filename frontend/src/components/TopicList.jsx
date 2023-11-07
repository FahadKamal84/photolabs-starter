import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {

  const {topicData, onLoadTopic} = props
  const topicArray = topics.map((topic)=> {
    <TopicListItem 
      key = {topic.id}
      topic = {topic}
      onLoadTopic = {onLoadTopic}
      />
      }
  );
  
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicArray}
    
    </div>
  );
};

export default TopicList;
