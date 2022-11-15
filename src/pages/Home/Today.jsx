import React from 'react';
import { Card } from 'react-bootstrap';
import './Today.scss';

function Today() {
  return (
    <div className="today-area">
      <div style={{ overflow: 'hidden', marginLeft: '-95px' }}>
        <div className="carousel">
          <div className="inner">
            <img src="img/2.jpg" alt="carousel-img-1" />
          </div>
          <div className="inner">
            <img src="img/3.jpg" alt="carousel-img-2" />
          </div>
          <div className="inner">
            <img src="img/4.png" alt="carousel-img-3" />
          </div>
        </div>
      </div>

      <div className="today-area__id">똑똑한 생활인 _ {}님</div>
      <div>
        <div>지금! 서점 베스트</div>
        <div>서점 3사 100위 내, 71권을 밀리에서 만나보세요</div>
        <div></div>
      </div>
    </div>
  );
}

export default Today;
