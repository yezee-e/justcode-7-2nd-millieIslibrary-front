import React from 'react';
import { Link } from 'react-router-dom';

function Audio() {
  return (
    <div>
      <ul className="caterogyList">
        <li className="categorys">
          <Link className="categoryContent" to="">
            <strong>예시입니다.</strong>
            <p>예시입니다</p>
          </Link>
        </li>
        <li className="categorys">
          <Link className="categoryContent" to="">
            <strong>예시입니다.</strong>
            <p>예시입니다</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Audio;
