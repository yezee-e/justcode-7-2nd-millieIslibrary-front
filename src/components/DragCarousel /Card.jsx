import React from 'react';
import './Card.scss';

function Card({ coverImg, title, author }) {
  return (
    <div className="card-area">
      <img src={coverImg} alt="coverImg" />
      <div className="title">
        {title.length > 15 ? `${title.slice(0, 15)}...더보기` : title}
      </div>
      <div className="author">{author}</div>
    </div>
  );
}

export default Card;
