import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <div>
    <h1>Michael's Hot List</h1>
    <Link to="/">Home</Link> |
    <Link to="/newtopic">New Topic </Link>|
    <Link to="/aboutus">About Us</Link>
    </div>
  );
}
