import React from 'react';

import './Login.scss';

function Login() {
  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">독서와 무제한 친해지리</h3>
        <p className="subTitle">12만 권 속에서 인생책을 찾아보세요.</p>

        <label className="labelIdBox">
          <div className="inner">
            <div className="input">
              <span className="inputIdSpan">휴대폰 번호</span>
              <input className="inputId" placeholder="01012345678" />
            </div>
          </div>
        </label>

        <label className="labelPwBox">
          <div className="inner">
            <div className="input">
              <span className="inputPwSpan">비밀번호</span>
              <input className="inputPw" placeholder="비밀번호 입력" />
            </div>
          </div>
        </label>

        <div className="buttonBox">
          <button disabled className="loginButton">
            로그인
          </button>
        </div>

        <ul className="loginSubMenu">
          <li>
            <a>회원가입</a>
          </li>
          <div className="verticalBox" />
          <li>
            <a>비밀번호 찾기</a>
          </li>
          <div className="verticalBox" />
          <li>
            <a>기업회원 로그인</a>
          </li>
        </ul>

        <div className="or">
          <p className="orSpan">또는</p>
        </div>

        <div className="snsList">
          <button className="kakaoTalkLogo" />
          <button className="naverLogo" />
          <button className="facebookLogo" />
          <button className="appleLogo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
