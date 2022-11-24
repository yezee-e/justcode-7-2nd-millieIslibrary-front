import React from 'react';

function Makers() {
  return (
    <div>
      <ul className="makeBy">
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person1.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>William A. Keller</strong>
          </div>
        </li>
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person2.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>Dorothy R. Hunt</strong>
          </div>
        </li>
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person3.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>Elena M. Haden</strong>
          </div>
        </li>
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person4.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>Billie M. Lacy</strong>
          </div>
        </li>
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person5.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>Lillian R. Hoover</strong>
          </div>
        </li>
        <li className="producers">
          <div className="producersBox">
            <img
              className="makersPhoto"
              alt="#"
              src="/img/person6.png"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            />
            <strong>Michael B. White</strong>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Makers;
