import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  const { topic, onLoadTopic } = props
  
  return (
    <div className="topic-list__item">
      <span onClick= {()=> onLoadTopic(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
