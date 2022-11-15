import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Login.scss';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const emailHandler = e => {
    setEmail(e.currentTarget.value);
  };

  const passwordHandler = e => {
    setPassword(e.currentTarget.value);
  };

  const POSTloginInfo = () => {
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          navigate(`/Today`);
        }
      });
  };

  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">독서와 무제한 친해지리</h3>
        <p className="subTitle">12만 권 속에서 인생책을 찾아보세요.</p>

        <label className="labelIdBox">
          <div className="inner">
            <div className="input">
              <span className="inputIdSpan">이메일</span>
              <input
                maxLength="25"
                type="text"
                className="inputId"
                placeholder="ex)libraryIsPush@gmail.com"
                onChange={emailHandler}
              />
            </div>
          </div>
        </label>

        <label className="labelPwBox">
          <div className="inner">
            <div className="input">
              <span className="inputPwSpan">비밀번호</span>
              <input
                type="password"
                className="inputPw"
                placeholder="비밀번호 입력"
                onChange={passwordHandler}
              />
            </div>
          </div>
        </label>

        <div className="buttonBox">
          <button onClick={POSTloginInfo} className="loginButton">
            로그인
          </button>
        </div>

        <ul className="loginSubMenu">
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <div className="verticalBox" />
          <li>
            <Link to="/findpw">비밀번호 찾기</Link>
          </li>
          <div className="verticalBox" />
          <li>
            <a href="null">기업회원 로그인</a>
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
