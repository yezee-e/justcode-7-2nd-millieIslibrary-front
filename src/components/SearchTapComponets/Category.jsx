import React from 'react';
import { useNavigate } from 'react-router-dom';

function Category({ content, idNum, cover_img }) {
  const navigate = useNavigate();

  const goToCategorys = () => {
    navigate(`/category/${idNum}`);
  };
  // const POSTCategoryInfo = () => {
  //   fetch(`${SERVER_URL}/category/${idNum}`, {
  //     method: 'POST',
  //     headers: { 'content-Type': 'application/json' },
  //   })
  //     .then(res => res.json())
  //     .then(data => setList(data.data));
  // };

  return (
    <div className="categoryHover">
      {/* <ul className="caterogyList"> */}
      <li onClick={goToCategorys} className="categorys">
        <div style={{ cursur: 'pointer' }} className="categoryContent">
          <div style={{ marginTop: '10px', width: '200px', border: 'none' }}>
            <strong
              style={{ width: '150px', fontSize: '16px', border: 'none' }}
            >
              {content}
            </strong>
          </div>
          <div style={{ border: 'none' }}>
            <img
              alt=""
              src={cover_img}
              style={{
                marginLeft: '350px',
                width: '100px',
                transform: 'rotate(15deg',
                border: 'none',
              }}
            />
          </div>
        </div>
      </li>
      {/* </ul> */}
    </div>
  );
}

export default Category;
