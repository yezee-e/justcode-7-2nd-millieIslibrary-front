import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Rank({ title, idx }) {
  const [slide, setSlide] = useState(0);
  const slideref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(slide => slide + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slide !== 10) {
      slideref.current.style.transition = 'all 0.5s ease-in-out';
      slideref.current.style.transform = `translateY(${-slide * 32}px)`;
    } else setSlide(0);
  }, [slide]);

  const idxPlus1 = idx + 1;

  return (
    <div>
      <ul ref={slideref} className="rankingArea">
        <li>
          <Link
            style={{
              textDecoration: 'none',
              color: '#242424',
              display: 'flex',
            }}
            to=""
          >
            <em style={{ display: 'block', marginRight: '10px' }}>
              {idxPlus1}
            </em>
            <p style={{ display: 'block' }}>{title}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Rank;
