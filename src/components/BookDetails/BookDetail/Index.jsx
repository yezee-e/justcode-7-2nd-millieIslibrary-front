import React, { useState } from 'react';
import css from './Index.module.scss';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

function Index({ toc }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={css.accordionWrap}>
      <div
        className={css.accordion}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <h3>목차</h3>
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
      {visible && (
        <p className={css.textArea} dangerouslySetInnerHTML={{ __html: toc }} />
      )}
    </div>
  );
}

export default Index;
