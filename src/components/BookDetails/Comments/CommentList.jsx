import React, { useState } from 'react';
import css from './CommentList.module.scss';

function CommentList(props) {
  const { id, createdAt, plusComment, onRemove } = props;
  const [visible, setVisible] = useState(false);

  return (
    <li className={css.commentSection} key={id}>
      <div className={css.imgBox}>
        <img
          src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
          alt="유저 이미지"
        />
      </div>
      <div className={css.textBox}>
        <div className={css.deleteBtn}>
          {visible && (
            <button
              className={css.moreArea}
              onClick={() => {
                if (window.confirm('정말 삭제할까요?')) {
                  alert('성공적으로 삭제되었습니다!');
                  onRemove(id);
                }
              }}
            >
              삭제하기
            </button>
          )}
        </div>
        <div className={css.nickName}>
          <p>hi_Ryan</p>
          <button
            className={css.more}
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <img src="/img/more.svg" alt="" />
          </button>
        </div>
        <span className={css.date}>{createdAt}</span>
        <span>{plusComment}</span>
        <div className={css.reviewLike}>
          <p>이 리뷰가 마음에 드시나요?</p>
          <button type="button" className={css.likeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span>0</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentList;
