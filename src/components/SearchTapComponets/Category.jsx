import React from 'react';
import { useNavigate } from 'react-router-dom';

function Category({ content, idNum }) {
  const navigate = useNavigate();

  const goToCategorys = () => {
    navigate(`/category/${idNum}`);
  };
  // const POSTCategoryInfo = () => {
  //   fetch(`http://localhost:8000/category/${idNum}`, {
  //     method: 'POST',
  //     headers: { 'content-Type': 'application/json' },
  //   })
  //     .then(res => res.json())
  //     .then(data => setList(data.data));
  // };

  return (
    <div>
      {/* <ul className="caterogyList"> */}
      <li onClick={goToCategorys} className="categorys">
        <div style={{ cursur: 'pointer' }} className="categoryContent" to="">
          <strong>{content}</strong>
          {/* <p>예시입니다</p> */}
        </div>
      </li>
      {/* </ul> */}
    </div>
  );
}

export default Category;
