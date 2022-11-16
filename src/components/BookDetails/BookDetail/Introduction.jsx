import React, { useState } from 'react';
import css from './Introduction.module.scss';

function Introduction({ introduction }) {
  const [close, setClose] = useState(false);
  const moreBtn = () => {
    setClose(!close);
  };

  return (
    <div className={css.contentWrap}>
      <h3>책 소개</h3>
      <div>
        <p className={close ? '' : css.close}>{introduction}</p>
      </div>
      <button onClick={moreBtn} className={css.moreBtn}>
        {close ? '접어 두기' : '더보기'}
      </button>
    </div>
  );
}

export default Introduction;
