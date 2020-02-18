import React from 'react';
import Topic from './Topic';
import PropTypes from 'prop-types';

export default function TopicList(props) {
  return(
    <div>
    {props.topicList.map((topic, index) => {
      return <Topic {...topic} key={index} />
    })}
    </div>
  )
}

TopicList.propTypes= {
  topicList: PropTypes.array
}
