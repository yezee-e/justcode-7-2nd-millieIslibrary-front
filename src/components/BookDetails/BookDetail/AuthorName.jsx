import React from 'react';
import css from './AuthorName.module.scss';

function Author(author) {
  const { author_name } = author;

  return (
    <>
      <p className={css.author}>{author_name}</p>
    </>
  );
}

export default Author;
