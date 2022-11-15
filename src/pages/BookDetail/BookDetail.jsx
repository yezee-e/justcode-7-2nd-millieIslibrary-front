import React from 'react';
import css from './BookDetail.module.scss';
import AsideNav from '../../components/BookDetails/Aside/AsideNav';
import BookInfo from '../../components/BookDetails/BookInfo';

function BookDetail() {
  return (
    <div className={css.detailWrap}>
      <div className={css.container}>
        <div className={css.leftContainer}>
          <BookInfo />
        </div>
        <div className={css.rightContainer}>
          <AsideNav />
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
