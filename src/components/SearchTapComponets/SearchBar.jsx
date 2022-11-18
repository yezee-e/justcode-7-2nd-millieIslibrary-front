import React from 'react';

function SearchBar() {
  return (
    <div>
      <article className="searchBox">
        <div className="searchArea">
          <button className="magnifierIcon" />
          <div>
            <input
              className="inputSearch"
              type="text"
              placeholder="검색어를 입력하세요."
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default SearchBar;
