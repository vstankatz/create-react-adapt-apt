import React from 'react';
import PropTypes from 'prop-types';

function Topic (props) {

  const upvote = () => {
    console.log(`props.id ${props.id}`);
    props.topicListOnVote(props.id, 1);
  }

  const downvote = () => {
    console.log(`props.id ${props.id}`);
    props.topicListOnVote(props.id, -1);
  }

    const issueDiv = {
      border: '2px solid black',
      padding: '8px',
      borderRadius: '4px',
      textAlign: 'center',
      width: '80%',
      margin: '0 auto',
      marginTop: "16px"
    }

    const titleHR = {
      // width: '80%'
    }

    const italics = {
      fontStyle: 'italic'
    }
    return(
      <div style={issueDiv}>
        <h1>Issue: {props.title}</h1>
        <p>votes: {props.votes}</p>
        <hr style={titleHR}/>
        <p>{props.content}</p>
        <p>submitted by: <span style={italics}>{props.author}</span></p>
        <p onClick={upvote}>Upvote </p>
        <p onClick={downvote}>Downvote </p>
      </div>
    )

}

Topic.propTypes = {title: PropTypes.string, author: PropTypes.string, content: PropTypes.string}

export default Topic;
