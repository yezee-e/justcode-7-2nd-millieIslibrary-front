import React from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbarlist({ title, id }) {
  const navi = useNavigate();

  const goToDetails = () => navi(`/bookDetail/${id}`);

  return (
    <div>
      <li style={{ marginTop: '5px' }}>
        <img
          style={{ width: '25px', height: '25px' }}
          alt=""
          src="/img/magnifier.png"
        />
        <span
          onClick={goToDetails}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        >
          {title}
        </span>
      </li>
    </div>
  );
}

export default Searchbarlist;
