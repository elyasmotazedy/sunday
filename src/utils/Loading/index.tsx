import React from 'react';
import style from './style.module.css';
const Loading = () => {
  return (
    <>
      <div className={style.loadingContainer}>
        <img
          src="/logo.jpg"
          alt="Sunday loading image"
          width="250"
          height="250"
          className={style.pulse}
        />
      </div>

      <div className={style.loadingBg}></div>
    </>
  );
};

export default Loading;
