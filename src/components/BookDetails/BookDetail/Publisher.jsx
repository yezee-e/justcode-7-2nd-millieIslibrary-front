import React from 'react';
import css from './Publisher.module.scss';
import { Book } from 'react-bootstrap-icons';

function Publisher({ publisher, publisher_url }) {
  return (
    <div className={css.PublisherWrap}>
      <h4>
        <a>
          <Book />
        </a>
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
