import React from 'react';
import css from './Publisher.module.scss';

function Publisher({ publisher, publisher_url }) {
  return (
    <div className={css.PublisherWrap}>
      <h4>
        <img src="/images/book.svg" alt="책 이미지" />
        {publisher}
      </h4>
      <button
        onClick={() => {
          window.location.href = publisher_url;
        }}
      >
        종이책 구매하러 가기＞
      </button>
    </div>
  );
}

export default Publisher;
