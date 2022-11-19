import React, { useState, useRef, useEffect } from 'react';

function SearchBar() {
  const [searchClick, setSearchClick] = useState(false);
  const [searchBarContent, setSearchBarContent] = useState();
  const refSearchBar = useRef(null);
  const refContent = useRef(null);

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
      refContent.current.style.display = 'block';
    }
  }, [setSearchBarContent]);

  console.log(searchBarContent);
  return (
    <div>
      <article ref={refSearchBar} className="searchBox">
        <div className="searchArea">
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
          <div ref={refContent} className="notFoundWord">
            <p>최근 검색어가 없습니다.</p>
            <p>도서를 검색해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
