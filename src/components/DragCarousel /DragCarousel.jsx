import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card.jsx';
import './DragCarousel.scss';

function DragCarousel() {
  let [carousel, setCarousel] = useState([]);

  const bookData = () => {
    axios
      .get('http://localhost:3004/data')
      .then(res => {
        setCarousel(res.data);
      })
      .catch(() => '로딩실패');
  };

  useEffect(() => {
    bookData();
  }, []);

  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = e => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div>
      {carousel && (
        <div
          className="card-wrap"
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {carousel.map(item => {
            const { id, coverImg, title, author } = item;
            return (
              <Card
                key={id}
                title={title}
                author={author}
                coverImg={coverImg}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DragCarousel;
