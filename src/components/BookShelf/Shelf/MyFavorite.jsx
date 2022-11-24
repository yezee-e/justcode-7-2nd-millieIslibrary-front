import React, { useState, useEffect } from 'react';
import css from './MyFavorite.module.scss';
import { StarFill } from 'react-bootstrap-icons';
import { SERVER_URL } from '../../../config';

function MyFavorite() {
  const [bookDataList, setBookDataList] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/books?limit=10&myFavorite=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setBookDataList(data);
      });
  }, []);

  return (
    <div className={css.shelfContainer}>
      <div className={css.shelfNameBox}>
        <p>
          <a className={css.star}>
            <StarFill />
          </a>
          <span>My Favorite</span>
        </p>
      </div>
      <div className={css.bookContainer}>
        <div className={css.bookBox}>
          <div className={css.imgBox}>
            {bookDataList.map((bookData, idx) => (
              <img key={idx} src={bookData.cover_img} alt="책 이미지" />
            ))}
          </div>
          <div className={css.bookSupport}> </div>
        </div>
      </div>
    </div>
  );
}

export default MyFavorite;
