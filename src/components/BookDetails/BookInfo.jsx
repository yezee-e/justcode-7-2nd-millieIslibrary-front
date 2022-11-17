import React, { useState, useEffect } from 'react';
import css from './BookInfo.module.scss';
import Introduction from './BookDetail/Introduction';
import Author from './BookDetail/Author';
import Publish from './BookDetail/Publish';
import Publisher from './BookDetail/Publisher';
import Comments from './Comments/Comments';

function BookInfo() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('/data/book.json')
      .then(res => res.json())
      .then(data => {
        setItem(data.book);
      });
  }, []);

  return (
    <>
      {item.map(
        ({
          id,
          image,
          title,
          author,
          authorInfo,
          introduction,
          publish,
          publisher,
          publisher_url,
        }) => (
          <div className="wrapper" key={id}>
            <div className={css.BookContainer}>
              <img src={image} alt="책 이미지" />
              <div className={css.BookInfo}>
                <p className={css.book}>전자책</p>
                <p className={css.title}>{title}</p>
                <p className={css.author}>{author}</p>
                <div className={css.commentBox}>
                  <img src="/img/comment.png" alt="" />
                  <p>한 줄 리뷰</p>
                  <p className={css.total}>1개</p>
                </div>
              </div>
            </div>
            <Introduction key={introduction.id} introduction={introduction} />
            <Author key={authorInfo.id} authorInfo={authorInfo} />
            <Publish key={publish.id} publish={publish} />
            <Publisher
              key={publisher.id}
              publisher={publisher}
              publisher_url={publisher_url}
            />
          </div>
        )
      )}
      <Comments />
      <div className={css.ad}></div>
    </>
  );
}

export default BookInfo;
