import React, { useState, useEffect } from 'react';
import css from './BookInfo.module.scss';
import Introduction from './BookDetail/Introduction';
import Author from './BookDetail/Author';
import Index from './BookDetail/Index';
import Publisher from './BookDetail/Publisher';
import Comments from './Comments/Comments';

function BookInfo() {
  const [item, setItem] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);

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
          index,
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
                  <p className={css.total}>{reviewCount}개</p>
                </div>
              </div>
            </div>
            <Introduction key={introduction.id} introduction={introduction} />
            <Index key={index.id} index={index} />
            <Author key={authorInfo.id} authorInfo={authorInfo} />
            <Publisher
              key={publisher.id}
              publisher={publisher}
              publisher_url={publisher_url}
            />
          </div>
        )
      )}
      <Comments setReviewCount={setReviewCount} />
      <div className={css.ad}>
        <img
          src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/63733688ee90f.png"
          alt=""
        />
      </div>
    </>
  );
}

export default BookInfo;
