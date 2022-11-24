import React from 'react';
import css from './AuthorName.module.scss';

function Author(prop) {
  const { author_name } = prop;

  return (
    <>
      <p className={css.author}>{author_name}</p>
    </>
  );
}

export default Author;
