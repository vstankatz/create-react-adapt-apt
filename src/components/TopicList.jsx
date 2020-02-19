import React from 'react';
import Topic from './Topic';
import PropTypes from 'prop-types';

export default function TopicList(props) {
  const complaints = [
    {
      title: "Why Jim Sucks",
      author: "Dwight Schrute",
      content: "He keeps putting my things in Jello",
      id: 0,
      votes: 0
    }
  ]

  return(
    <div>
    {props.topicList.map((topic, index) => {
      return <Topic {...topic} key={index} topicListOnVote={props.onVote}/>
    })}
    {complaints.map((topic, index) => <Topic {...topic} key={index} topicListOnVote={props.onVote}/>
    )}
    </div>
  )
}

TopicList.propTypes= {
  topicList: PropTypes.array
}
