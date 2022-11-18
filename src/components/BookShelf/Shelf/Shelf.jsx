import React from 'react';
import css from './Shelf.module.scss';

function Shelf() {
  return (
    <div className={css.shelfContainer}>
      <div className={css.shelfNameBox}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffdd00"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span>My Favorite</span>
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
