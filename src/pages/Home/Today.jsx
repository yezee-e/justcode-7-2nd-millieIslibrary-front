import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Today.scss';

function Today() {
  return (
    <div className="today-area">
      <Carousel>
        <Carousel.Item className="inner">
          <img className="d-block w-100" src="img/7.png" alt="First slide" />
          <Carousel.Caption className="inner-text">
            <div>앞서가는 당신을 위한 </div>
            <div>트렌드 필독서</div>
            <p>2023년, 이제는 준비해야할 때!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img className="d-block w-100" src="img/3.png" alt="Second slide" />

          <Carousel.Caption className="inner-text">
            <div>조상님들 나 빼고 </div>
            <div>재밌는거 보셨네</div>
            <p>만화로 보는 고전 소설 속 사랑과 욕망</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img className="d-block w-100" src="img/6.png" alt="Third slide" />

          <Carousel.Caption className="inner-text">
            <div>올해, 난 무엇을 했나 </div>
            <div>불안이 고개를 든다면</div>
            <p>침대와 한 몸인 사람을 위한 책 추천</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="inner">
          <img className="d-block w-100" src="img/5.png" alt="Third slide" />

          <Carousel.Caption className="inner-text">
            <div>에디터가 엄선한 </div>
            <div>11월 3주 베스트 셀러</div>
            <p>어떤 책을 읽을지 고민이라면</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <img src="img/book2.png" alt="book" className="book" />
      </div>

      <div className="today-area__id">똑똑한 생활인 _ {}님</div>
      <div>
        <div>지금! 서점 베스트</div>
        <div>서점 3사 100위 내, 71권을 밀리에서 만나보세요</div>
        <div>
          <Row>
            <Col></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Today;
