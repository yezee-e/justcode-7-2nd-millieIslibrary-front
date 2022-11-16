import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

function Footer() {
  const information = [
    '이용약관 >',
    '개인정보처리방침 >',
    '청소년보호정책 >',
    '고객센터 >',
    '환불신청 >',
    'B2B문의 >',
    '콘텐츠 제휴문의 >',
    '저작권/도서오류 신고 >',
    '뷰어 다운로드 >',
    '종료예정 도서 >',
    '회사소개 >',
  ];
  return (
    <div className="foot-area">
      <Container className="foot-container">
        <Row>
          <Col className="foot-title">(주) 밀리는 서재</Col>
        </Row>
        <Row className="foot-info">사업자 정보 펼쳐보기 ⌄</Row>
        <Row className="footer-notice">
          {information.map((info, i) => (
            <Col key={i}>{info}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
