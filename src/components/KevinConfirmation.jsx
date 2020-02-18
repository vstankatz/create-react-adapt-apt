import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function KevinConfirmation(props) {
  return(
    <div>
      <p>Have you consulted <Link to='/conflictresolution'>Toby's Conflict Resolution</Link> binder?</p>
      <button onClick={props.onKevinConfirmation}>Yes</button>
    </div>
  );
}

KevinConfirmation.propTypes = {
  onKevinConfirmation: PropTypes.func
}
