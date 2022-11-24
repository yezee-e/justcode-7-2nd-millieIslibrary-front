import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import DropCard from '../../components/DragCarousel /DropCard';
import Footer from '../../components/Footer/Footer';
import { SERVER_URL } from '../../config';

function Gate() {
  let [book1, setBook1] = useState([]);
  let [book2, setBook2] = useState([]);
  let [book3, setBook3] = useState([]);

  let [isVisible, setIsVisible] = useState([]);

  const books = useRef();
  const sub = useRef();
  const category = useRef();

  useEffect(() => {
    axios
      .all([
        axios.get(`${SERVER_URL}/category/1`),
        axios.get(`${SERVER_URL}/category/4`),
        axios.get(`${SERVER_URL}/category/1`),
      ])
      .then(
        axios.spread((res1, res2, res4) => {
          const data11 = res1.data.data[0].books;
          const data22 = res2.data.data[0].books;
          const data44 = res4.data.data[0].books;

          setBook1(data11);
          setBook2(data22);
          setBook3(data44);
        })
      );
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(enteries => {
      let entry = enteries[0];
      setIsVisible(entry.isIntersecting);
    });
    //observer에 나타나면 함수를 동작시켜준다
    observer.observe(books.current);
    observer.observe(sub.current);
    observer.observe(category.current);
  }, []);

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
        <div ref={books} className={isVisible ? 'animation' : ''}>
          당신을 기다리는 12만권의 도서
        </div>
        <p ref={books} className={isVisible ? 'animation' : ''}>
          {' '}
          회원가입을 통해 어떤 도서가 있는지 확인해 보세요
        </p>
      </Books>

      <div>
        <DropCard drop={book1} />

        <DropCard drop={book2} value={book2} />

        <DropCard drop={book3} />
      </div>

      <Category>
        <div ref={category} className={isVisible ? 'animation' : ''}>
          싹다 무제한 9,900원
        </div>
      </Category>
      <Sub>
        <div ref={sub} className={isVisible ? 'animation' : ''}>
          언제든 해지가능!{' '}
        </div>
        <div ref={sub} className={isVisible ? 'animation' : ''}>
          첫달은 무료로 가볍게
        </div>
        <p ref={sub} className={isVisible ? 'animation' : ''}>
          상황에 맞게 원하는 요금제를 자유롭게 선택하세요
        </p>
        <Price>
          <div>
            <strong>전자책 정기구독</strong>
            <p>
              월 <strong>9,900원</strong>
            </p>
            <p>
              연 <strong>9,0000원</strong>
            </p>
            <p>밀리에서 제공하는 콘텐츠를 무제한으로</p>
          </div>
          <div>
            <strong>종이책 정기구독</strong>
            <p>
              월 <strong>15,000원</strong>
            </p>
            <p>
              연 <strong>183,0000원</strong>
            </p>
            <p>
              밀리의 모든 콘텐츠를 무제한으로 보고 2달에 1번 종이책+전자책
              배송까지
            </p>
          </div>
          <section>
            <p>📚 무료체험기간에 해지해도 금액이 청구되지 않아요</p>{' '}
            <p>📚 유로 결제되어도 사용이력이 없으면 즉시 환불드려요</p>{' '}
          </section>
        </Price>
      </Sub>
      <Footer />
      <Link to="/login" style={{ textDecoration: 'none' }}>
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

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
to {
  opacity: 1;
  transform: translateZ(0);
}
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
    transition: all 0.5s;
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
  }
  p {
    font-size: 20px;
    font-weight: 300;
    color: #555555;
    margin-top: 30px;
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f7f7f7;
  height: 500px;
  div {
    font-weight: 600;
    font-size: 3em;
    width: 250px;
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
  }
  p {
    font-size: 20px;
    font-weight: 300;
    color: #555555;
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
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
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
  }
  p {
    margin-top: 30px;
    font-size: 20px;
    color: #555555;
    font-weight: 300;
    &.animation {
      animation-name: ${fadeInUp};
      animation-duration: 5000ms;
    }
  }
`;
const Price = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 10px 10px 30px;
    width: 314px;
    height: 305px;

    border-radius: 20px;
    background-color: white;

    strong {
      font-size: 20px;
      font-weight: 600;
    }

    p {
      font-size: 13px;
      width: 213px;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    p {
      font-size: 16px;
      width: 240px;
      color: #555555;
    }
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
