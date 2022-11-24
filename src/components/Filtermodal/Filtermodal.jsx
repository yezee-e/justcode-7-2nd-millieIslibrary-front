import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { SERVER_URL } from '../../config';

import './Filtermodal.scss';
function Filtermodal({ popup, setPopup }) {
  const [modalCategory, setModalCategory] = useState([]);
  const ref = useRef(null);
  const navi = useNavigate();

  useEffect(() => {
    fetch(`${SERVER_URL}/category/info`)
      .then(res => res.json())
      .then(data => setModalCategory(data.data));
  }, []);

  useEffect(() => {
    if (popup === false) {
      ref.current.style.display = 'none';
    }
  });

  return (
    <div>
      <div ref={ref} className="modalWrap">
        <div className="modalBox">
          <div className="modalContent">
            <span className="nameCategory">카테고리</span>
            <div className="categoryBox">
              <ul
                style={{
                  padding: '0',
                  lineHeight: '35px',
                  color: '#959595',
                }}
              >
                {modalCategory.map(list => {
                  const goToDetails = () => {
                    navi(`/category/${id}`);
                  };
                  const { id, content } = list;
                  return (
                    <li
                      onClick={goToDetails}
                      style={{ cursor: 'pointer' }}
                      key={id}
                    >
                      <span>{content}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="btnBox">
            <button onClick={() => setPopup(false)} className="btnClose">
              취소
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btnEnter"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtermodal;
