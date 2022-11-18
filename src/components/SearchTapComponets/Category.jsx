import React from 'react';

function Category({ category, id }) {
  const POSTCategoryInfo = () => {
    fetch('http://localhost:8000/user/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    }).then(res => console.log(res));
  };

  return (
    <div>
      {/* <ul className="caterogyList"> */}
      <li className="categorys">
        <div
          onClick={POSTCategoryInfo}
          style={{ cursur: 'pointer' }}
          className="categoryContent"
          to=""
        >
          <strong>{category}</strong>
          <p>예시입니다</p>
        </div>
      </li>
      {/* </ul> */}
    </div>
  );
}

export default Category;
