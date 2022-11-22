import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Categorydetails.scss';
import CategoryList from './CategoryList';
import Filtermodal from '../Filtermodal/Filtermodal';

function Categorydetails() {
  const [bookList, setBookList] = useState([]);
  const { id } = useParams();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setPopup(false);
  }, [setPopup]);

  useEffect(() => {
    fetch(`http://localhost:8000/category/${id}`)
      .then(res => res.json())
      .then(data => setBookList(data.data[0].books));
  }, [setBookList]);

  return (
    <div>
      <div className="categoryDetailWrap">
        <div className="categoryTapHead">
          <h2>밀리 오리지널</h2>
        </div>
        <article className="categoryName">
          <strong onClick={() => setPopup(true)} style={{ cursor: 'pointer' }}>
            밀리 오리지널 전체보기
            <span style={{ marginLeft: '5px', fontSize: '16px' }}>▼</span>
          </strong>
          {popup === true ? (
            <Filtermodal setPopup={setPopup} popup={popup} />
          ) : null}
        </article>
        <div className="bookList">
          <div className="bookListName">밀리 오리지널 인기 도서</div>
          <div className="bookListWraper">
            <ul className="booksWraper">
              {bookList.map(book => {
                const { title, cover_img, author_name, id } = book;
                return (
                  <CategoryList
                    key={id}
                    title={title}
                    cover_img={cover_img}
                    author_name={author_name}
                    idx={id}
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
