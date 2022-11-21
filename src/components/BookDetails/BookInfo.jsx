import React, { useState, useEffect } from 'react';
import css from './BookInfo.module.scss';
import Introduction from './BookDetail/Introduction';
import Author from './BookDetail/Author';
import AuthorName from './BookDetail/AuthorName';
import Index from './BookDetail/Index';
import Publisher from './BookDetail/Publisher';
import { useParams } from 'react-router-dom';
import Comments from './Comments/Comments';

function BookInfo() {
  const [item, setItem] = useState([]);
  const [commentArray, setCommentArray] = useState(0);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/book-detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data.bookResult);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/book-detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setCommentArray(data.reviewInfo.reviewArray);
      });
  }, []);

  return (
    <>
      {item.map(
        ({
          id,
          title,
          cover_img,
          toc,
          introduction,
          categories_name,
          publish_time,
          publisher,
          page,
          rating_score,
          books_authors,
        }) => (
          <div className="wrapper" key={id}>
            <div className={css.BookContainer}>
              <img src={cover_img} alt="책 이미지" />
              <div className={css.BookInfo}>
                <p className={css.book}>전자책</p>
                <p className={css.title}>{title}</p>
                {books_authors.map((prop, idx) => {
                  return <AuthorName key={idx} {...prop} />;
                })}
                <div className={css.commentBox}>
                  <img src="/img/comment.png" alt="" />
                  <p>한 줄 리뷰</p>
                  <p className={css.total}>{commentArray.length}개</p>
                </div>
              </div>
            </div>
            <Introduction
              key={introduction.id}
              introduction={introduction}
              page={page}
              categories_name={categories_name}
              publish_time={publish_time}
              rating_score={rating_score}
              publisher={publisher}
            />
            <Index key={toc.id} toc={toc} />
            {books_authors.map(author => {
              return <Author key={author.author_id} {...author} />;
            })}
            <Publisher key={publisher.id} publisher={publisher} />
            <Comments setBookInfoComments={setCommentArray} />
          </div>
        )
      )}
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
