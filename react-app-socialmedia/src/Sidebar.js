import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = topic => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/originals/05/0b/63/050b63960ffc4f25f0ae21d41b0870c6.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile Views</p>
          <p className="sidebar__statnumber">1,779</p>
        </div>
        <div className="sidebar__stat">
          <p>Post Views</p>
          <p className="sidebar__statnumber">5,349</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('apples')}
        {recentItem('oranges')}
        {recentItem('pizza')}
        {recentItem('pears')}
      </div>
    </div>
  );
}

export default Sidebar;
