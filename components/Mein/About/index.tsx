'use client';

import Image from 'next/image';
import about from './About.module.scss';
import { LayoutAnimationSkroll } from '../../Layout/LayoutAnimationSkroll';

interface AboutTranslate {
  aboutTitle: string;
  aboutSpan: string;
  aboutSubTitle: string;
  text1: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  text2: string;
  button: string;
}

export const AboutUs = ({
  aboutTitle,
  aboutSpan,
  aboutSubTitle,
  text1,
  li1,
  li2,
  li3,
  li4,
  li5,
  text2,
  button,
}: AboutTranslate) => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 74,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className={about.about}>
      <div className="container box">
        <LayoutAnimationSkroll className={about.about__left} transform="translateY(150px)">
          <Image width={200} height={200} loading="lazy" src="/myface.png" alt="" />
        </LayoutAnimationSkroll>
        <LayoutAnimationSkroll className={about.about__right} transform="translateX(100px)">
          <h2 className="title">
            {aboutTitle} <span style={{ display: 'initial' }}>{aboutSpan}</span>
          </h2>
          <p className="text">{aboutSubTitle}</p>
          <article className={about.about__right_article}>
            <p className="text">{text1}</p>
            <ul>
              <li>{li1}</li>
              <li>{li2}</li>
              <li>{li3}</li>
              <li>{li4}</li>
              <li>{li5}</li>
            </ul>

            <p className="text">{text2}</p>
          </article>
          <button onClick={() => scrollToElement('contact')} className="button">
            {button}
          </button>
        </LayoutAnimationSkroll>
      </div>
    </section>
  );
};
