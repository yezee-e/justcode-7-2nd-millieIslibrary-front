import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchTapComponets/SearchBar';
import Collections from '../../components/SearchTapComponets/Collections';
import Makers from '../../components/SearchTapComponets/Makers';
// import Audio from '../../components/SearchTapComponets/Audio';
import Shotcutbox from '../../components/SearchTapComponets/Shotcutbox';
import Category from '../../components/SearchTapComponets/Category';
import Rank from '../../components/SearchTapComponets/Rank';

function Search() {
  const [rank, setRank] = useState([]);
  const [category, setCategory] = useState([]);
  const [wordReCommend, setWordReCommend] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navi = useNavigate();

  useEffect(() => {
    fetch('./data/ranking.json')
      .then(res => res.json())
      .then(data => setRank(data.rank));
  }, [setRank]);

  useEffect(() => {
    fetch('http://localhost:8000/category/info')
      .then(res => res.json())
      .then(data => setCategory(data.data));
  }, [setCategory]);

  useEffect(() => {
    fetch('http://localhost:8000/category/bookrandom')
      .then(res => res.json())
      .then(data => setWordReCommend(data.data));
  }, [refresh]);

  const refreshBtn = () => {
    setRefresh((check: boolean) => !check);
  };

  //카테고리 목 데이터
  // useEffect(() => {
  //   fetch('./data/category.json')
  //     .then(res => res.json())
  //     .then(data => setCategory(data.cate));
  // }, [setCategory]);

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
                <div style={{ display: 'flex' }}>
                  <h2 className="Title">밀리 추천 책</h2>
                  <button onClick={refreshBtn} className="refreshBtn" />
                </div>

                <div className="wordRecommendContentBox">
                  <div className="wordRecommendContentWrap">
                    <ul className="wordRecommendContent">
                      <li>
                        {wordReCommend.map(list => {
                          const { title, id } = list;
                          return (
                            <p
                              className="pHover"
                              key={id}
                              onClick={() => navi(`/bookDetail/${id}`)}
                            >
                              {title}
                            </p>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shotCut">
              <h2 className="Title">바로가기</h2>
              <Shotcutbox />
            </div>
            <div className="grayLine" />

            <div className="categoryListWrap">
              {/* <ul className="categoryTap">
                <li className="category">카테고리</li>
                <li className="audio">오디오</li>
                <li className="collection">컬렉션</li>
              </ul> */}
              <h2 className="Title">카테고리</h2>
              <ul className="caterogyList">
                {category.map(list => {
                  const { id, content, cover_img } = list;
                  return (
                    <Category
                      key={id}
                      content={content}
                      idNum={id}
                      cover_img={cover_img}
                    />
                  );
                })}
              </ul>

              {/* <h2 className="Title">오디오</h2>

              <Audio /> */}

              <h2 className="Title">추천 작가</h2>
              <Makers />

              <h2 style={{ marginTop: '40px' }} className="Title">
                컬렉션
              </h2>
              <p style={{ fontSize: '14px', color: '#6f6f6f' }}>
                다양한 아이콘을 확인하세요 !
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
