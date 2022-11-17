import React from 'react';
import css from './BookShelf.module.scss';
import { useNavigate } from 'react-router-dom';
import Shelf from './Shelf/Shelf';

function BookShelf() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

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
            <b>특별한 시인_____ </b>의 서재
          </p>
        </div>
        <section>
          <Shelf />
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
