import React from 'react';
import './Categorydetails.scss';

function Categorydetails() {
  return (
    <div>
      <div className="categoryDetailWrap">
        <div className="categoryTapHead">
          <h2>카테고리</h2>
        </div>
        <article className="categoryName">
          <strong>카테고리이름(전체보기)</strong>
        </article>
        <div className="bookList">
          <div className="bookListName">밀리 (카테고리) 인기 도서</div>
          <div className="bookListWraper">
            <ul className="booksWraper">
              <li className="books">
                <div className="flexBox">
                  <img
                    style={{ width: '140px' }}
                    alt=""
                    src="https://cover.millie.co.kr/service/cover/179544336/993c760a07314817872211e74221c01c.jpg?w=220&f=webp&q=80"
                  />
                  <strong
                    style={{
                      margin: '10px 0 10px 0',
                      wordWrap: 'break-word',
                      width: '140px',
                      lineHeight: '20px',
                    }}
                  >
                    안녕하세요 저스트코드 화이팅입니다
                  </strong>
                  <p
                    style={{
                      width: '140px',
                      fontSize: '14px',
                      color: '#7D7F7D',
                      overflow: 'hidden',
                    }}
                  >
                    정동현
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer style={{ width: '100vw', height: '300px' }} />
    </div>
  );
}

export default Categorydetails;
