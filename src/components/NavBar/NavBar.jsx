import React, { useState } from 'react';
import './NavBar.scss';

function NavBar() {
  const [navTab, setNavTab] = useState(0);
  return (
    <div className="nav-area">
      <div className="nav-bar">
        <div onClick={() => setNavTab(0)}>
          {navTab == 0 ? (
            <div
              style={{
                fontWeight: 800,
              }}
            >
              NOW
            </div>
          ) : (
            <div>NOW</div>
          )}
        </div>
        <div onClick={() => setNavTab(1)}>
          {navTab == 1 ? (
            <div style={{ fontWeight: 800 }}>스토리</div>
          ) : (
            <div>스토리</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
