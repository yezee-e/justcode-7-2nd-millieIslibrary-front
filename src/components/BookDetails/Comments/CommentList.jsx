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
                onRemove(id);
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
            <img src="img/heart.svg" />
            <span>1</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentList;
