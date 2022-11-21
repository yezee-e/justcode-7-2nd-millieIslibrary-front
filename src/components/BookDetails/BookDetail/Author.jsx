import React, { useState } from 'react';
import css from './Author.module.scss';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

function Author(author) {
  const { author_intro } = author;
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
            <ChevronUp />
          </button>
        ) : (
          <button>
            <ChevronDown />
          </button>
        )}
      </div>
      {visible && <p className={css.textArea}>{author_intro}</p>}
    </div>
  );
}

export default Author;
