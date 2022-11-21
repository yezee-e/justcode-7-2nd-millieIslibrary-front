import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Categorydetails.scss';
import CategoryList from './CategoryList';

function Categorydetails() {
  const [bookList, setBookList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/category/${id}`)
      .then(res => res.json())
      .then(data => setBookList(data.data[0].books));
  }, [setBookList]);

  // let books = bookList[0].books;
  // console.log(books);
  return (
    <div>
      <div className="categoryDetailWrap">
        <div className="categoryTapHead">
          <h2>밀리 오리지널</h2>
        </div>
        <article className="categoryName">
          <strong>밀리 오리지널 전체보기</strong>
        </article>
        <div className="bookList">
          <div className="bookListName">밀리 오리지널 인기 도서</div>
          <div className="bookListWraper">
            <ul className="booksWraper">
              {bookList.map((book, idx) => {
                const { title, cover_img, author_name } = book;
                return (
                  <CategoryList
                    key={id}
                    title={title}
                    cover_img={cover_img}
                    author_name={author_name}
                    idx={idx}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <footer style={{ width: '100vw', height: '300px' }} />
    </div>
  );
}

export default Categorydetails;
