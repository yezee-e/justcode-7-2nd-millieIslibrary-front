import React from 'react';

function Searchbarlist({ title }) {
  return (
    <div>
      <li style={{ marginTop: '5px' }}>
        <img
          style={{ width: '25px', height: '25px' }}
          alt=""
          src="/img/magnifier.png"
        />
        <span style={{ marginLeft: '5px' }}>{title}</span>
      </li>
    </div>
  );
}

export default Searchbarlist;
