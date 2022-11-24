import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';
import { SERVER_URL } from '../../config';

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
    fetch(`${SERVER_URL}/user/login`, {
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
          navigate(`/home`);
        }
      });
  };

  const REST_API_KEY = 'f11be27c8aba124b3dde6e48ce2c061e';
  const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const openKakao = () => {
    window.open(
      `${KAKAO_AUTH_URL}`,
      '카카오 로그인',
      'toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=800, height=800, top=60,left=350'
    );
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      POSTloginInfo();
    }
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
                onKeyPress={onKeyPress}
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
            <Link to="/pwchange">비밀번호 찾기</Link>
          </li>
          <div className="verticalBox" />
          <li>
            <span
              style={{ color: '#8b8b8b', fontSize: '16px', cursor: 'pointer' }}
              onClick={() => alert('준비중입니다.')}
            >
              기업회원 로그인
            </span>
          </li>
        </ul>

        <div className="or">
          <p className="orSpan">또는</p>
        </div>

        <div className="snsList">
          {/* <button
            onClick={window.open('https://naver.com')}
            className="kakaoTalkLogo"
          /> */}
          <a onClick={openKakao} className="kakaoTalkLogo" />
          <button className="naverLogo" />
          <button className="facebookLogo" />
          <button className="appleLogo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
