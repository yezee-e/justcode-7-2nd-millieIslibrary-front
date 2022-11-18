import React from 'react';
import css from './AsideNav.module.scss';

function AsideNav() {
  const copyUrl = () => {
    let url = '';
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('복사가 완료되었습니다.');
  };

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
        <button
          onClick={() => {
            copyUrl();
          }}
        >
          <img className={css.share} src="/img/share.svg" /> 링크 복사
        </button>
        <button className={css.immediatelyBtn}>바로 담기</button>
      </div>
    </div>
  );
}

export default AsideNav;
