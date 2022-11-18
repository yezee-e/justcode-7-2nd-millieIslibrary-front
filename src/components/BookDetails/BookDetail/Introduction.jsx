import React, { useState } from 'react';
import css from './Introduction.module.scss';

function Introduction({ introduction }) {
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
              <a>소설</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>페이지</p>
            <strong>
              <a>364P</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>출판사</p>
            <strong>
              <a>밀리의서재</a>
            </strong>
          </li>
          <li className={css.slideItem}>
            <p>출간일</p>
            <strong>
              <a>2022.01.17</a>
            </strong>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Introduction;
