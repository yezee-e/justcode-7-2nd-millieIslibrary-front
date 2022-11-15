import React from 'react';

import './Signup.scss';

function Signup() {
  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">휴대폰 가입</h3>
        <p className="subTitle">휴대폰 번호는 아이디로 사용됩니다.</p>

        <label className="labelNameBox">
          <div className="inner">
            <div className="input">
              <span className="inputNameSpan">이름</span>
              <input className="inputName" placeholder="이름 입력" />
            </div>
          </div>
        </label>

        <label className="labelDateBox">
          <div className="inner">
            <div className="input">
              <span className="inputDateSpan">생년월일,성별</span>
              <input className="inputDateFront" placeholder="생년월일" />
              <span className="minusLine">-</span>
              <input className="inputDateBack" placeholder="0" />
              <span className="dot">● ● ● ● ● ●</span>
            </div>
          </div>
        </label>

        <label className="labelCdBox">
          <div className="inner">
            <div className="input">
              {/* <input className="inputCd" placeholder="비밀번호 입력" /> */}
              <div class="dropdown">
                <span className="inputCdSpan">통신사</span>
                <button
                  class="inputCd btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  통신사 선택
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="null">
                      SKT
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="null">
                      KT
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="null">
                      LG U+
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="null">
                      SKT 알뜰폰
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="null">
                      KT 알뜰폰
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="null">
                      LG U+ 알뜰폰
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </label>

        <label className="labelPhoneNumBox">
          <div className="inner">
            <div className="input">
              <span className="inputPhoneNumSpan">휴대폰 번호</span>
              <input className="inputPhoneNum" placeholder="01012345678" />
            </div>
          </div>
        </label>

        <div className="foreignGuide">
          <span>
            해외에서 거주 중이라면?
            <button>해외 거주자 회원가입</button>
          </span>
        </div>

        <div className="buttonBox">
          <button disabled className="loginButton">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
