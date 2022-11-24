import React from 'react';
import './Card.scss';

function Card({ id, coverImg, title, author, toDetail }) {
  return (
    <div className="card-area" onClick={() => toDetail(id)}>
      <img src={coverImg} alt="coverImg" />
      <div className="title">
        {title.length > 15 ? `${title.slice(0, 15)}...더보기` : title}
      </div>
      <div className="author">{author}</div>
    </div>
  );
}

export default Card;
