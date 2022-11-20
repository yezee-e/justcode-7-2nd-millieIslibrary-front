import React, { useEffect, useState } from 'react';
import css from './AsideNav.module.scss';
import { StarFill, Star, Bookshelf, Share } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';

function AsideNav() {
  const params = useParams();
  const [bookData, setBookData] = useState([]);
  const [likeCheck, setLikeCheck] = useState(false);

  const copyUrl = () => {
    let url = '';
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('복사가 완료되었습니다.');
  };

  //현재 페이지 데이터
  useEffect(() => {
    fetch(`http://localhost:8000/book-detail/${params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setBookData(data.bookResult);
      });
  }, []);

  //찜 데이터 보내기
  const onFavorite = () => {
    fetch(`http://localhost:8000/add-list/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        books_id: bookData[0].id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLikeCheck('TRUE');
      });
  };

  //찜 데이터 삭제
  const delFavorite = () => {
    fetch(`http://localhost:8000/add-list/favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        books_id: bookData[0].id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLikeCheck('FALSE');
      });
  };

  //찜 체크 데이터 가져오기
  useEffect(() => {
    fetch(`http://localhost:8000/book-detail/${params.id}/check-list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setLikeCheck(data[0]);
      });
  }, []);

  const onLike = e => {
    if (likeCheck.check_favorite === 'TRUE') {
      window.confirm('찜을 취소했습니다.');
      delFavorite();
    } else {
      window.confirm('My Favorite 책장에 담았습니다.');
      onFavorite();
    }
  };

  return (
    <div className={css.asideContainer}>
      <div className={css.asideContent}>
        <button
          onClick={() => {
            if (window.confirm('내 책장에 담았습니다.')) {
            }
          }}
        >
          <a>
            <Bookshelf />
          </a>
          내서재에 담기
        </button>
        <button onClick={onLike}>
          {likeCheck.check_favorite === 'TRUE' ? (
            <a className={css.star}>
              <StarFill />
            </a>
          ) : (
            <a className={css.star}>
              <Star />
            </a>
          )}
          My Favorite
        </button>
        <button
          onClick={() => {
            copyUrl();
          }}
        >
          <a>
            <Share />
          </a>
          링크 복사
        </button>
        <button className={css.immediatelyBtn}>바로 읽기</button>
      </div>
    </div>
  );
}

export default AsideNav;
