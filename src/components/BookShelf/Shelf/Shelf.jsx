import React from 'react';
import css from './Shelf.module.scss';
import { BookmarkHeart } from 'react-bootstrap-icons';

function Shelf() {
  return (
    <div className={css.shelfContainer}>
      <div className={css.shelfNameBox}>
        <p>
          <a className={css.bookMark}>
            <BookmarkHeart />
          </a>
          <span>내 책장</span>
        </p>
      </div>
      <div className={css.bookContainer}>
        <div className={css.bookBox}>
          <div className={css.imgBox}>
            <img
              src="https://contents.sixshop.com/uploadedFiles/141783/product/image_1640415000407.png"
              alt=""
            />
            <img
              src="https://contents.sixshop.com/uploadedFiles/141783/product/image_1640415000407.png"
              alt=""
            />
          </div>
          <div className={css.bookSupport}> </div>
        </div>
      </div>
    </div>
  );
}

export default Shelf;
