import React from 'react';
import css from './AsideNav.module.scss';
import { StarFill, Star, Bookshelf, Share } from 'react-bootstrap-icons';

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
        <button
          onClick={() => {
            if (window.confirm('내 책장에 담았습니다.')) {
            }
          }}
        >
          <a>
            <Bookshelf />
          </a>
          내서재에 담기
        </button>
        <button
          onClick={() => {
            if (window.confirm('My Favorite 책장에 담았습니다.')) {
            }
          }}
        >
          <a className={css.star}>
            <Star />
          </a>
          My Favorite
        </button>
        <button
          onClick={() => {
            copyUrl();
          }}
        >
          <a>
            <Share />
          </a>{' '}
          링크 복사
        </button>
        <button className={css.immediatelyBtn}>바로 읽기</button>
      </div>
    </div>
  );
}

export default AsideNav;
