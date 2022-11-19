import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DragCarousel from '../../components/DragCarousel /DragCarousel';
import './Today.scss';

function Today() {
  const [recommend, setRecommend] = useState([]);
  const [query, setQuery] = useSearchParams('');
  const limitNum = 6;
  let limit = query.get('limit');
  let btn = query.get('categoryName');
  console.log('쿼리값은?: ', btn);

  const getCategory = () => {
    axios
      .get(`http://localhost:3004/books?categoryName=${btn}&limit=${limit}`)
      .then(res => {
        setRecommend(res.data);
      })
      .catch(() => '로딩실패');
    query.set('limit', limitNum);
    // setQuery(query);
  };

  useEffect(() => {
    getCategory();
  }, [limit, btn]);

  const navigate = useNavigate();
  const bookType = btn => {
    navigate(`/Home?categoryName=${btn}`);
  };

  const bookCategory = [
    '예술/대중문화',
    '어린이',
    '소설/시/희곡',
    '인문학',
    '자기계발',
  ];

  return (
    <div className="today-area">
      <Carousel>
        <Carousel.Item className="inner">
          <img
            className="d-block w-100 car-img"
            src="img/7.png"
            alt="First slide"
          />
          <Carousel.Caption className="inner-text">
            <div>배움에는 끝이 없다 </div>
            <div>인생은 도전이니까</div>
            <p>진짜 나를 위한 공부를 시작해봐요!</p>
            <div>
              <img
                src="img/find.png"
                alt="carousel-img"
                className="inner-img"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img
            className="d-block w-100 car-img"
            src="img/3.png"
            alt="Second slide"
          />

          <Carousel.Caption className="inner-text">
            <div>드디어 수능 끝 </div>
            <div>고생한 당신 쉬어라!</div>
            <p>이불 덮고 귤 까먹으며 볼 만화 추천</p>
            <div>
              <img
                src="img/book1.png"
                alt="carousel-img"
                className="inner-img"
                width={10}
                height={200}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img
            className="d-block w-100 car-img"
            src="img/6.png"
            alt="Third slide"
          />

          <Carousel.Caption className="inner-text">
            <div>올해, 난 무엇을 했나 </div>
            <div>불안이 고개를 든다면</div>
            <p>침대와 한 몸인 사람을 위한 책 추천</p>
            <div>
              <img
                src="img/find.png"
                alt="carousel-img"
                className="inner-img"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img
            className="d-block w-100 car-img"
            src="img/5.png"
            alt="Third slide"
          />

          <Carousel.Caption className="inner-text">
            <div>에디터가 엄선한 </div>
            <div>11월 3주 베스트 셀러</div>
            <p>어떤 책을 읽을지 고민이라면</p>
            <div>
              <img
                src="img/book2.png"
                alt="carousel-img"
                className="inner-img"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div>
        <img src="img/book2.png" alt="book" className="book" />
      </div> */}

      <div className="today-area__id">똑똑한 생활인 _ {}님</div>
      <div>
        <div>지금! 서점 베스트</div>
        <div>서점 3사 100위 내, 71권을 밀리에서 만나보세요</div>
        <div className="dragCard">
          <div className="dragCard-title">한 달이내 출간된 책</div>
          <DragCarousel />
        </div>

        <Row>
          <Col lg={5} md={12}>
            <div className="ad2">
              {' '}
              <div>
                책을 통해 배우는 기쁨
                <p>밀리 선정 베스트!</p>
              </div>
              <img src="img/book2.png" alt="back-img" />
            </div>
          </Col>
          <Col lg={7} md={12}>
            <div className="ad1">
              {' '}
              <div>
                일상을 멋있게 만드는 다섯가지 독서법!
                <p>독서로 가치있는 일상을 만들어보세요!</p>
              </div>
              <img src="img/add.png" alt="back-img" />
            </div>
          </Col>
        </Row>
        <div className="dragCard">
          <div className="dragCard-title">지금 새로 들어온 책</div>
          <DragCarousel />
          <DragCarousel />
        </div>

        <div className="dragCard">
          <div className="dragCard-title">이번주 취향별 추천책</div>
          <div>
            {bookCategory.map(btn => (
              <button key={btn} onClick={() => bookType(btn)}>
                {btn}
              </button>
            ))}
          </div>

          <div>
            <Row>
              {recommend.map(books => {
                const { id, coverImg, title, author } = books;
                return (
                  <Col lg={4} sm={6} key={id} className="cardWrap">
                    <div className="cardImg">
                      <img src={coverImg} alt="coverImg" />
                    </div>
                    <div className="title">{title}</div>
                    <div className="author">{author}</div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="dragCard">
          <div className="dragCard-title">지금 새로 들어온 책</div>
          <DragCarousel />
        </div>
      </div>
    </div>
  );
}

export default Today;
