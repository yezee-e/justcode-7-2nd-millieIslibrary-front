import React from 'react';
import { Link } from 'react-router-dom';

function Collections() {
  return (
    <div>
      <ul className="collectionList">
        <li className="collections">
          <Link className="collectionContent" to="">
            <img
              className="collectionImg"
              alt="#"
              src="https://cdn-icons-png.flaticon.com/128/2171/2171990.png"
              style={{ width: '25px', marginRight: '10px' }}
            />
            <strong>강아지 아이콘</strong>
          </Link>
        </li>
        <li className="collections">
          <Link className="collectionContent" to="">
            <img
              className="collectionImg"
              alt="#"
              src="https://cdn-icons-png.flaticon.com/128/2437/2437632.png"
              style={{ width: '25px', marginRight: '10px' }}
            />
            <strong>강아지와 고양이 아이콘</strong>
          </Link>
        </li>
        <li className="collections">
          <Link className="collectionContent" to="">
            <img
              className="collectionImg"
              alt="#"
              src="https://cdn-icons-png.flaticon.com/128/4195/4195620.png"
              style={{ width: '25px', marginRight: '10px' }}
            />
            <strong>사자 아이콘</strong>
          </Link>
        </li>
        <li className="collections">
          <Link className="collectionContent" to="">
            <img
              className="collectionImg"
              alt="#"
              src="https://cdn-icons-png.flaticon.com/128/1864/1864499.png"
              style={{ width: '25px', marginRight: '10px' }}
            />
            <strong>닭 아이콘</strong>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Collections;
