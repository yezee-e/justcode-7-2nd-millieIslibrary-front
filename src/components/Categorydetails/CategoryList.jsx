import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryList({ author_name, cover_img, title, idx }) {
  const navi = useNavigate();
  const goToDetails = () => {
    navi(`/bookDetail/${idx}`);
  };
  return (
    <div>
      <li onClick={goToDetails} className="books">
        <div className="flexBox">
          <img
            style={{ width: '140px', height: '220px' }}
            alt=""
            src={cover_img}
          />
          <strong
            style={{
              margin: '10px 0 10px 0',
              wordWrap: 'break-word',
              width: '140px',
              lineHeight: '20px',
            }}
          >
            {title}
          </strong>
          <p
            style={{
              width: '140px',
              fontSize: '14px',
              color: '#7D7F7D',
              overflow: 'hidden',
            }}
          >
            {author_name}
          </p>
        </div>
      </li>
    </div>
  );
}

export default CategoryList;
