import React from 'react';
import PropTypes from 'prop-types';

class Topic extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.topicListOnVote();
  };

  render(){
    const issueDiv = {
      border: '2px solid white',
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
        <h1>Issue: {this.props.title}</h1>
        <hr style={titleHR}/>
        <p>{this.props.content}</p>
        <p>submitted by: <span style={italics}>{this.props.author}</span></p>
        <p onClick={this.handleClick}>Upvote </p>
      </div>
    )
  }
}

Topic.propTypes = {title: PropTypes.string, author: PropTypes.string, content: PropTypes.string}

export default Topic;
// <p onClick={this.downvote(props.id)}>Upvote {this.state.downvotes}</p>
