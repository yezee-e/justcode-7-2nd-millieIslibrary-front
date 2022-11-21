import React, { useEffect } from 'react';
import { useRef } from 'react';
import './Filtermodal.scss';
function Filtermodal({ popup, setPopup }) {
  const ref = useRef(null);

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
                style={{ padding: '0', lineHeight: '35px', color: '#959595' }}
              >
                <li>
                  <span>로맨스</span>
                </li>
                <li>
                  <span>SF</span>
                </li>
                <li>
                  <span>인문</span>
                </li>
                <li>
                  <span>역사</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="btnBox">
            <button onClick={() => setPopup(false)} className="btnClose">
              취소
            </button>
            <button className="btnEnter">확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtermodal;
