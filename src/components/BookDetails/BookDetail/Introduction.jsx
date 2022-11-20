import React, { useState } from 'react';
import css from './Introduction.module.scss';

function Introduction({
  introduction,
  page,
  categories_name,
  publish_time,
  rating_score,
  publisher,
}) {
  const [close, setClose] = useState(false);
  const moreBtn = () => {
    setClose(!close);
  };

  return (
    <>
      <div className={css.contentWrap}>
        <h3>책 소개</h3>
        <div>
          <p className={close ? '' : css.close}>{introduction}</p>
        </div>
        <button onClick={moreBtn} className={css.moreBtn}>
          {close ? '접어 두기' : '더보기'}
        </button>
      </div>
      <div className={css.bookInfoContainer}>
        <ul className={css.slideWrapper}>
          <li className={css.slideItem}>
            <p>카테고리</p>
            <strong>
              <a>{categories_name}</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>페이지</p>
            <strong>
              <a>{page}P</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>출판사</p>
            <strong>
              <a>{publisher}</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>출간일</p>
            <strong>
              <a>{publish_time}</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>평점</p>
            <strong>
              <a>{rating_score}</a>
            </strong>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Introduction;
