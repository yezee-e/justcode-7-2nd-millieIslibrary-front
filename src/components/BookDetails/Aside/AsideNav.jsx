import React from 'react';
import css from './AsideNav.module.scss';

function AsideNav() {
  return (
    <div className={css.asideContainer}>
      <div className={css.asideContent}>
        <button>
          <img className={css.starFill} src="/img/bookshelf.svg" />
          내서재에 담기
        </button>
        <button>
          <img className={css.starFill} src="/img/star.svg" />
          My Favorite
        </button>
        <button>
          <img className={css.share} src="/img/share.svg" /> 공유하기
        </button>
        <button className={css.immediatelyBtn}>바로 담기</button>
      </div>
    </div>
  );
}

export default AsideNav;
