import React from 'react';
import NewTopicForm from './NewTopicForm';
import PropTypes from 'prop-types';
import KevinConfirmation from './KevinConfirmation';

export default class NewTopicFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false
  }
  this.handleKevinConfirmation = this.handleKevinConfirmation.bind(this)
}

handleKevinConfirmation() {
  this.setState ({ formVisibleOnPage:true})
}

render() {
  let currentlyVisibleContent = null;
  if (this.state.formVisibleOnPage) {
    currentlyVisibleContent = (
      <NewTopicForm onNewTopicCreation={this.props.onNewTopicCreation} />
    )
  } else {
    currentlyVisibleContent = (
      <KevinConfirmation onKevinConfirmation={
        this.handleKevinConfirmation
      }
      />
    )
  }
  return <div>{currentlyVisibleContent}</div>
}
}

NewTopicFormControl.propTypes = { onNewTopicCreation: PropTypes.func}
