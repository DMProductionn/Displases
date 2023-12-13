import React from 'react';
import style from './Skeleton.module.css'

const Skeleton = ({ count=6 }) => {
  return (
    <>
      <ul>
        {[Array(count)].map((_, index) => (
          <li key={index} className={style.main}>
            <div className={style.title}>1</div>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Skeleton;
