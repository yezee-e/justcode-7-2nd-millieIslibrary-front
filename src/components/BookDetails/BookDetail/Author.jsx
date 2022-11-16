import React, { useState } from 'react';
import css from './Author.module.scss';

function Accordion({ authorInfo }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={css.accordionWrap}>
      <div
        className={css.accordion}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <h3>저자 소개</h3>
        {visible ? (
          <button>
            <img src="/images/chevron-up.svg" alt="올리기 이미지" />
          </button>
        ) : (
          <button>
            <img src="/images/chevron-down.svg" alt="내리기 이미지" />
          </button>
        )}
      </div>
      {visible && <p className={css.textArea}>{authorInfo}</p>}
    </div>
  );
}

export default Accordion;
