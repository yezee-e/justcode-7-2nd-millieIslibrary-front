import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import DropCard from '../../components/DragCarousel /DropCard';
import Footer from '../../components/Footer/Footer';

function Gate() {
  let [rightBook, setRightBook] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3004/data')
      .then(res => {
        setRightBook(res.data);
      })
      .catch(() => '로딩실패');
  }, []);

  //   window.addEventListener('scroll', function () {
  //     let value = this.window.scrollY;
  //     console.log('scrollY:', value);

  //   });

  //   let observer = new IntersectionObserver(e => {
  //     console.log(e);
  //   });
  //observer에 나타나면 함수를 동작시켜준다
  //   observer.observe(div);
  return (
    <div>
      <Header className="gate-head">
        <img src="/logo2.png" alt="logo" width={50} />
      </Header>
      <Main>
        <Title>당신의 일상을 1밀리 +</Title>
        <SubTitle>독서와 무제한 친해지리</SubTitle>
      </Main>
      <Books>
        <div>당신을 기다리는 12만권의 도서</div>
        <p> 회원가입을 통해 어떤 도서가 있는지 확인해 보세요</p>
      </Books>

      <DropCard drop={rightBook} />
      <DropCard drop={rightBook} turn={true} />
      <DropCard drop={rightBook} />
      <Sub>
        <div>언제든 해지가능! </div>
        <div>첫달은 무료로 가볍게</div>
        <p>상황에 맞게 원하는 요금제를 자유롭게 선택하세요</p>
        <Price>
          <div>
            <a>전자책 정기구독</a>
            <a>월 9,900원</a>
            <a>연 9,0000원</a>
            <a>밀리에서 제공하는 콘텐츠를 무제한으로</a>
          </div>
          <div>
            <a>종이책 정기구독</a>
            <a>월 15,000원</a>
            <a>연 183,0000원</a>
            <a>
              밀리의 모든 콘텐츠를 무제한으로 보고 2달에 1번 종이책+전자책
              배송까지
            </a>
          </div>
          <section></section>
        </Price>
      </Sub>
      <Footer />
      <Link to="/login" styled={{ textDecoration: 'none' }}>
        <Btn>
          <button>로그인해서 밀리 보러가기</button>
        </Btn>
      </Link>
    </div>
  );
}

export default Gate;

const slideSide = keyframes`
    from{left:-100px;}
    to{ left:70px}
`;

const slideBottom = keyframes`
    from{bottom:-100px;}
    to{ bottom:70px}
`;

const Header = styled.div`
  background-color: white;
  height: 60px;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  padding-left: 20px;
  z-index: 1;
`;

const Main = styled.div`
  height: 100vh;
  background: url('/img/back.jpg') fixed;
  background-size: cover;
  opacity: 0.7;
`;

const Title = styled.div`
  font-size: 4em;
  width: 380px;
  color: black;
  position: absolute;
  top: 140px;
  left: 50px;
  position: relative;
  animation: ${slideSide} 1s ease-out;
`;

const SubTitle = styled.div`
  font-size: 2em;
  position: relative;
  top: 150px;
  left: 50px;
  animation: ${slideSide} 1s ease-out;
`;

const Books = styled.div`
  height: 355px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  div {
    font-size: 3em;
    width: 350px;
    font-weight: 600;
    animation: ${slideBottom} 1s ease-out;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    color: #555555;
    margin-top: 30px;
  }
`;

const Sub = styled.div`
  background-color: #ffeb60;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  div {
    font-weight: 700;
    font-size: 3rem;
    color: #242424;
  }
  p {
    margin-top: 30px;
    font-size: 20px;
    color: #555555;
    font-weight: 300;
  }
`;
const Price = styled.div`
  display: flex;
  div {
    width: 314px;
    height: 305px;
    border: 1px solid red;
    border-radius: 20px;
    background-color: white;
  }
`;

const Btn = styled.div`
  position: sticky;
  bottom: 15px;
  display: flex;
  justify-content: center;

  button {
    border: 1px solid black;
    background-color: #333333;
    color: white;
    width: 422px;
    text-align: center;
    padding: 25px 0;
    border-radius: 25px;
  }
`;
