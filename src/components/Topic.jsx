import React from 'react';
import PropTypes from 'prop-types';

export default function Topic(props){
  return(
    <div>
    <h1>{props.title}</h1>
    <p>{props.author}</p>
    <p>{props.content}</p>
    </div>
  )
}

Topic.propTypes = {title: PropTypes.string, author: PropTypes.string, content: PropTypes.string}
