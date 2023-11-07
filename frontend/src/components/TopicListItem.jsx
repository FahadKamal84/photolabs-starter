import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  title: "Nature",
};
const {id, slug, title} = sampleDataForTopicListItem

const TopicListItem = (props) => {
  
  const { topic, onLoadTopic } = props

  return (
    <div className="topic-list__item">
      <span onClick= {()=> onLoadTopic(topic)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
