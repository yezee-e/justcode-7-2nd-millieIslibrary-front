import axios from 'axios';
import React, { useEffect, useState } from 'react';
import css from './BookShelf.module.scss';
import { useNavigate } from 'react-router-dom';
import Shelf from './Shelf/Shelf';
import MyFavorite from './Shelf/MyFavorite';
import { SERVER_URL } from '../../config';

function BookShelf() {
  const navigate = useNavigate();
  let [user, setUser] = useState([]);

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${SERVER_URL}/user/info`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      })
      .then(res => {
        setUser(res.data.userInfo[0]);
      })
      .catch(() => '로딩실패');
  }, []);

  return (
    <div className={css.BookShelfContainer}>
      <div className={css.shelfSection}>
        <div className={css.bookImage}>
          <button className={css.chooseBook} onClick={goHome}>
            <span>+ 책 고르기</span>
          </button>
          <img
            src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
            alt="내 서재 이미지"
          />
          <p>
            <b>똑똑한 생활인</b> {user.nickname}의 서재
          </p>
        </div>
        <section>
          <MyFavorite />
          <Shelf />
          <div className={css.footer}>
            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookShelf;
