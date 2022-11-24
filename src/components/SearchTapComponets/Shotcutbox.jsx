import React from 'react';
import { Link } from 'react-router-dom';

function Shotcutbox() {
  return (
    <div>
      <div className="shotCutBox">
        <div className="shotCutContent">
          <img
            src="/img/trophy.png"
            alt="#"
            style={{ width: '25px', marginRight: '15px' }}
          />
          <Link className="nonDeco" to="">
            베스트
          </Link>
        </div>
        <div className="shotCutContent">
          <img
            src="/img/price-sticker.png"
            alt="#"
            style={{ width: '25px', marginRight: '15px' }}
          />
          <Link className="nonDeco" to="">
            한 달 이내 출간
          </Link>
        </div>
        <div className="shotCutContent">
          <img
            src="/img/calendar.png"
            alt="#"
            style={{ width: '25px', marginRight: '15px' }}
          />
          <Link className="nonDeco" to="">
            공개 예정
          </Link>
        </div>
        <div className="shotCutContent">
          <img
            src="/img/wall-clock.png"
            alt="#"
            style={{ width: '25px', marginRight: '15px' }}
          />
          <Link className="nonDeco" to="">
            종료 예정
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shotcutbox;
