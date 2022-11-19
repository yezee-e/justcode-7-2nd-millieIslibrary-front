import React, { useState, useRef, useEffect } from 'react';
import Searchbarlist from './Searchbarlist';

function SearchBar() {
  const [searchClick, setSearchClick] = useState(false);
  const [searchBarContent, setSearchBarContent] = useState('');
  const [searchDisplay, setSearchDisplay] = useState(true);
  const [book, setBook] = useState([]);
  const refSearchBar = useRef(null);
  // const refContent = useRef(null);

  useEffect(() => {
    fetch('./data/books.json')
      .then(res => res.json())
      .then(data => setBook(data.book));
  }, []);

  console.log(book);

  const filterTitle = book.filter(item =>
    item.title
      .replace(' ', '')
      .toLocaleLowerCase()
      .includes(searchBarContent.toLocaleLowerCase().replace(' ', ''))
  );

  const searchBarOpen = () => {
    setSearchClick(true);
    refSearchBar.current.style.zIndex = '100';
  };
  const searchBarClose = () => {
    setSearchClick(false);
    refSearchBar.current.style.zIndex = '50';
  };

  const inputBarHanle = e => {
    setSearchBarContent(e.target.value);
  };

  useEffect(() => {
    if (searchBarContent === '') {
      // refContent.current.style.display = 'block';
      setSearchDisplay(true);
    } else if (searchBarContent !== '') {
      // refContent.current.style.display = 'none';
      setSearchDisplay(false);
    }
  }, [searchBarContent]);

  return (
    <div>
      <article ref={refSearchBar} className="searchBox">
        <div className="searchArea">
          <button className="categoryFilter">
            <a>전체 ↓</a>
          </button>
          <button onClick={searchBarClose} className="buttonClose">
            닫기
          </button>
          <div onClick={searchBarOpen} className="searchBoxClick">
            <button className="magnifierIcon" />
            <div>
              <input
                onChange={inputBarHanle}
                className="inputSearch"
                type="text"
                placeholder="검색어를 입력하세요."
                value={searchBarContent}
              />
            </div>
          </div>
        </div>
      </article>

      <div
        onClick={() => setSearchClick(true)}
        style={
          searchClick === true ? { display: 'block' } : { display: 'none' }
        }
        className="searchClick"
      >
        <div className="inSearchwrap">
          <div
            // ref={refContent
            style={
              searchDisplay === true
                ? { display: 'block' }
                : { display: 'none' }
            }
            className="notFoundWord"
          >
            <p>최근 검색어가 없습니다.</p>
            <p>도서를 검색해보세요.</p>
          </div>

          <ul className="booksUL">
            <div className="booksList">
              {filterTitle.map(list => {
                const { title, id } = list;
                return <Searchbarlist title={title} key={id} />;
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
