import React, { useState, useEffect } from 'react';
import './Search.scss';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchTapComponets/SearchBar';
import Collections from '../../components/SearchTapComponets/Collections';
import Makers from '../../components/SearchTapComponets/Makers';
import Audio from '../../components/SearchTapComponets/Audio';
import Shotcutbox from '../../components/SearchTapComponets/Shotcutbox';
import Category from '../../components/SearchTapComponets/Category';
import Wordrecommend from '../../components/SearchTapComponets/Wordrecommend';
import Rank from '../../components/SearchTapComponets/Rank';

function Search() {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    fetch('./data/ranking.json')
      .then(res => res.json())
      .then(data => setRank(data.rank));
  }, []);

  console.log(rank[rank.length - 1]);

  return (
    <div>
      <Header />
      <div className="searchTapWrap">
        <SearchBar />
        <div>
          <section className="sectionArea">
            <div className="searchBodyWrap">
              <div className="rankingBox">
                {rank.map((list, idx) => {
                  return <Rank key={list.id} title={list.title} idx={idx} />;
                })}
              </div>

              <div className="searchWordRecommendArea">
                <h2 className="Title">밀리 추천 책</h2>
                <div className="wordRecommendContentBox">
                  <Wordrecommend />
                </div>
              </div>
            </div>

            <div className="shotCut">
              <h2 className="Title">바로가기</h2>
              <Shotcutbox />
            </div>
            <div className="grayLine" />

            <div className="categoryListWrap">
              <ul className="categoryTap">
                <li className="category">카테고리</li>
                <li className="audio">오디오</li>
                <li className="collection">컬렉션</li>
              </ul>
              <h2 className="Title">카테고리</h2>
              <Category />

              <h2 className="Title">오디오</h2>

              <Audio />

              <h2 className="Title">만든 사람들</h2>
              <Makers />

              <h2 style={{ marginTop: '40px' }} className="Title">
                컬렉션
              </h2>
              <p style={{ fontSize: '14px', color: '#6f6f6f' }}>
                밀리가 만드는 다양한 아티클을 확인해보세요!
              </p>

              <Collections />
              <div className="blankBox" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Search;
