import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import greeting from './Greeting.module.scss';
import { stack } from '../../../utils/stacks';

export const ScrolBox = () => {
  return (
    <div className={greeting.greeting__left__platforms__box}>
      <div className={greeting.greeting__left__platforms__box__images}>
        {stack.map((el) => (
          <Image
            key={el.img}
            className={greeting.greeting__platforms__box__images_image}
            src={el.img}
            width={40}
            height={40}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
