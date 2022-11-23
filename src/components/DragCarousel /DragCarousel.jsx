import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import './DragCarousel.scss';

function DragCarousel({ data, toDetail }) {
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

  //쓰로틀 구현
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

  const delay = 50; //속도 50ms만큼 느려짐
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div>
      {data && (
        <div
          className="card-wrap"
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {data.map(item => {
            const { id, cover_img, title, author_name } = item;
            return (
              <Card
                key={title}
                title={title}
                author={author_name}
                coverImg={cover_img}
                id={id}
                toDetail={toDetail}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DragCarousel;
