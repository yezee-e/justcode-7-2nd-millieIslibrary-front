import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Signup.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [nickName, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;

  const navigate = useNavigate();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = event => {
    setConfirmPassword(event.currentTarget.value);
  };

  const POSTUserInfo = () => {
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        nickname: nickName,
      }),
    }).then(res => res.json());

    if (validEmail && validPassword) {
      navigate(`/`);
    }
  };

  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">회원가입</h3>
        <p className="subTitle">고객님의 정보를 입력해주세요.</p>

        <label className="labelNameBox">
          <div className="inner">
            <div className="input">
              <span className="inputNameSpan">이메일</span>
              <input
                type="text"
                className="inputName"
                placeholder="이메일 입력"
                onChange={onEmailHandler}
              />
            </div>
          </div>
        </label>

        <p
          style={
            email && !validEmail ? { display: 'block' } : { display: 'none' }
          }
          className="isVaildAlertDiffId"
        >
          이메일 양식이 틀립니다.
        </p>

        <label className="labelDateBox">
          <div className="inner">
            <div className="input">
              <span className="inputDateSpan">비밀번호</span>
              <input
                minLength="8"
                maxLength="16"
                type="password"
                className="inputDateFront"
                placeholder="비밀번호 입력"
                onChange={onPasswordHandler}
              />
            </div>
          </div>
        </label>

        <p
          style={
            password && !validPassword
              ? { display: 'block' }
              : { display: 'none' }
          }
          className="isVaildAlertDiffPw"
        >
          10~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </p>

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
                onChange={onConfirmPasswordHandler}
              />
            </div>
          </div>
        </label>

        <p
          style={
            password === confirmPassword
              ? { display: 'none' }
              : { display: 'block' }
          }
          className="isVaildAlertDiffPwVaild"
        >
          비밀번호가 일치하지 않습니다.
        </p>

        <label className="labelCdBox">
          <div className="inner">
            <div className="input">
              <span className="inputCdSpan">별명</span>
              <input
                type="text"
                className="inputCd"
                placeholder="별명 입력"
                onChange={onNameHandler}
              />
            </div>
          </div>
        </label>

        <div className="foreignGuide">
          <span>
            해외에서 거주 중이라면?
            <button onClick={() => alert('준비중입니다!')}>
              해외 거주자 회원가입
            </button>
          </span>
        </div>

        <div className="buttonBox">
          <button onClick={POSTUserInfo} className="loginButton">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
