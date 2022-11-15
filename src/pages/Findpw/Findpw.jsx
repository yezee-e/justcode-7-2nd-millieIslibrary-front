import React from 'react';
import './Findpw.scss';
function Findpw() {
  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">비밀번호 찾기</h3>
        <p className="subTitle">가입할 때 입력했던 정보를 확인합니다.</p>

        <label className="labelNameBox">
          <div className="inner">
            <div className="input">
              <span className="inputNameSpan">이메일</span>
              <input className="inputName" placeholder="이메일 입력" />
            </div>
          </div>
        </label>

        <label className="labelDateBox">
          <div className="inner">
            <div className="input">
              <span className="inputDateSpan">비밀번호</span>
              <input
                minLength="8"
                maxLength="16"
                className="inputDateFront"
                placeholder="비밀번호 입력"
                type="password"
              />
            </div>
          </div>
        </label>

        <label className="labelDateBox">
          <div className="inner">
            <div className="input">
              <span className="inputDateSpan">비밀번호 확인</span>
              <input
                minLength="8"
                maxLength="16"
                type="password"
                className="inputDateFront"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>
        </label>

        <label className="labelCdBox">
          <div className="inner">
            <div className="input">
              <span className="inputCdSpan">별명</span>
              <input className="inputCd" placeholder="별명 입력" />
            </div>
          </div>
        </label>

        <div className="buttonBox">
          <button disabled className="loginButton">
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Findpw;
