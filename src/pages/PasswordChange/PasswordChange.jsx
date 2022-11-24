import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordChange.scss';
import { SERVER_URL } from '../../config';

function PasswordChange() {
  const [certification, setCertification] = useState(false);
  const [certificationNumber, setCertificationNumber] = useState([]);
  const [certificationInput, setCertificationInput] = useState('');
  const [email, setEmail] = useState('');
  // const [certificationSame, setCertificationSame] = useState(false);
  const [passwordChange, setPasswordChange] = useState('');
  const [passwordChangeCheck, setPasswordChangeCheck] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const refSend = useRef(null);
  const refPasswordChange = useRef(null);
  const refPasswordChangeCheck = useRef(null);
  const refChange = useRef(null);
  const refCertificationInputBox = useRef(null);
  const navi = useNavigate();

  const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(passwordChange));
  }, [passwordChange]);

  useEffect(() => {
    if (certification === true) {
      fetch(`${SERVER_URL}/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(res => res.json())
        .then(json => setCertificationNumber(json));
      refSend.current.style.display = 'none';
      refChange.current.style.display = 'block';
      refCertificationInputBox.current.style.display = 'block';
      alert('인증번호 발송완료!');
      return setCertification(false);
    }
  }, [certification]);

  const emailInputHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const certificationInputHandler = event => {
    setCertificationInput(event.currentTarget.value);
  };
  const passwordChangeInputHandler = event => {
    setPasswordChange(event.currentTarget.value);
  };
  const passwordChangeCheckInputHandler = event => {
    setPasswordChangeCheck(event.currentTarget.value);
  };

  const setCertificationSameHandler = () => {
    if (certificationInput == checkNum) {
      // setCertificationSame(true);
      alert('인증 완료!');
      refPasswordChange.current.style.display = 'block';
      refPasswordChangeCheck.current.style.display = 'block';
    } else if (certificationInput != checkNum) {
      // setCertificationSame(false);
      alert('인증번호가 다릅니다.');
    }
  };

  const checkNum = certificationNumber.authenNum;

  const changePassword = () => {
    if (passwordChange == passwordChangeCheck) {
      fetch('${SERVER_URL}/user/changepw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: passwordChange,
        }),
      }).then(res => res(alert('비밀번호 변경되었습니다.!')));
      navi('/login');
    } else if (passwordChange != passwordChangeCheck) {
      alert('비밀번호가 다릅니다.');
    }
  };

  return (
    <div className="mainLoginContainer">
      <div className="loginBoxMainPhoto" />

      <div className="loginBox">
        <h3 className="title">비밀번호 변경</h3>
        <p className="subTitle">가입한 이메일로 비밀변호를 변경합니다.</p>

        <label className="labelNameBox">
          <div className="inner">
            <div className="input">
              <span className="inputNameSpan">이메일</span>
              <input
                onChange={emailInputHandler}
                className="inputName"
                placeholder="가입한 이메일로 인증번호를 보냅니다."
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

        <label ref={refCertificationInputBox} className="certificationBox">
          <div className="inner">
            <div className="input">
              <span className="certificationNum">인증번호</span>
              <input
                maxLength="6"
                onChange={certificationInputHandler}
                className="inputDateFront"
                placeholder="인증번호는 6글자입니다"
                type="password"
              />
              <button
                onClick={setCertificationSameHandler}
                className="certificationBtn"
              >
                인증
              </button>
            </div>
          </div>
        </label>

        <label ref={refPasswordChange} className="changePasswordBox">
          <div className="inner">
            <div className="input">
              <span className="changePasswordSpan">비밀번호 변경</span>
              <input
                onChange={passwordChangeInputHandler}
                minLength="10"
                maxLength="16"
                type="password"
                className="changePasswordFront"
                placeholder="변경 할 비밀번호를 입력해주세요."
              />
            </div>
          </div>
        </label>
        <p
          style={
            passwordChange && !validPassword
              ? { display: 'block' }
              : { display: 'none' }
          }
          className="isVaildAlertDiffPw"
        >
          10~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </p>

        <label ref={refPasswordChangeCheck} className="changePasswordCheckBox">
          <div className="inner">
            <div className="input">
              <span className="changePasswordCheckSpan">비밀번호 확인</span>
              <input
                type="password"
                onChange={passwordChangeCheckInputHandler}
                className="changePasswordCheckFront"
                placeholder="변경 할 비밀번호 확인"
              />
            </div>
          </div>
        </label>

        <p
          style={
            passwordChange === passwordChangeCheck
              ? { display: 'none' }
              : { display: 'block' }
          }
          className="isVaildAlertDiffPwVaild"
        >
          비밀번호가 일치하지 않습니다.
        </p>

        <div className="buttonBox">
          <button
            ref={refSend}
            onClick={() => setCertification(true)}
            className="sendButton"
          >
            인증번호 발송
          </button>
        </div>

        <div className="buttonBox">
          <button
            ref={refChange}
            onClick={changePassword}
            className="changeButton"
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordChange;
