import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <Nav className="head">
      <div className="head-left">
        <img src="./logo2.png" alt="logo" width={50} />
        <Nav.Item className="head-tab">
          <Link to="/" className="head-tab__link">
            투데이
          </Link>
        </Nav.Item>
        <Nav.Item className="head-tab">
          <Link to="/" className="head-tab__link">
            검색
          </Link>
        </Nav.Item>
        <Nav.Item className="head-tab">
          <Link to="/" className="head-tab__link">
            내서재
          </Link>
        </Nav.Item>
        <Nav.Item className="head-tab">
          <Nav.Link className="head-tab__link">관리</Nav.Link>
        </Nav.Item>
      </div>

      <div className="head-right">
        <FaRegBell className="head-rigth__icon" />
        <Button variant="dark">{}</Button>
      </div>
    </Nav>
  );
}

export default Header;
