import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="green" />
        <InputOption
          Icon={ThumbDownAltOutlinedIcon}
          title="Dislike"
          color="red"
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="blue" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="purple" />
      </div>
    </div>
  );
});

export default Post;
