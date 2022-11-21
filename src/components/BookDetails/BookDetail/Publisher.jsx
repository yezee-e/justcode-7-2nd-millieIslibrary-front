import React from 'react';
import css from './Publisher.module.scss';
import { Book } from 'react-bootstrap-icons';

function Publisher({ publisher }) {
  return (
    <div className={css.PublisherWrap}>
      <h4>
        <a>
          <Book />
        </a>
        {publisher}
      </h4>
      <button>종이책 구매하러 가기＞</button>
    </div>
  );
}

export default Publisher;
