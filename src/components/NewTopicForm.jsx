import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewTopicForm(props) {
  let _title,
  _author,
  _content = null;
  const handleFileHRReport = e => {
    e.preventDefault();
    props.onNewTopicCreation({
      title: _title.value,
      author: _author.value,
      content: _content.value,
      id: v4()
    })
    _title.value = '';
    _author.value = '';
    _content.value = '';
  }

  return(
    <div>
    <form onSubmit={handleFileHRReport}>
    <input type='text'
    placeholder="Dwight Schrute, Assistant to the Regional Manager"
    ref={input => {
      _author = input;
    }}
    />
    <input type='text'
    placeholder='Why Jim Sucks'
    ref={input => {
      _title = input;
    }}
    />
    <textarea
    placeholder="Jim keeps putting my stapler in Jello. "
    ref={textarea => {
      _content = textarea;
    }}
    />
    <button type='submit'>Send to HR</button>
    </form>
    </div>
  )
}

NewTopicForm.propTypes = {
  onNewTopicCreation: PropTypes.func
};
