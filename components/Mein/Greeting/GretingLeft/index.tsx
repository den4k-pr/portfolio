import Link from 'next/link';
import { ScrolBox } from '../skrolBox';
import greeting from '../Greeting.module.scss';
import TypewriterAnimation from '../TypewriterAnimation';
import { Translate } from '..';
import { GretingLeftAnimation } from '../GretingLeftAnimation';

export const GretingLeft = ({ title, animTitle, subTitle }: Translate) => {
  return (
    <div className={greeting.greeting__left}>
      <GretingLeftAnimation time={0} transform={-50}>
        <h1 style={{ display: 'inline' }} className="title">
          Front-end / Full-Stack
          <br /> <TypewriterAnimation title={title} animTitle={animTitle} />
        </h1>
      </GretingLeftAnimation>
      <GretingLeftAnimation time={500} transform={-50}>
        <h2 className={greeting.greeting__left_subTitle}>{subTitle}</h2>
        <ul className={greeting.greeting__left__list}>
          <li>
            <Link
              style={{ backgroundImage: `url('/github.svg')`, backgroundSize: '35px' }}
              className={greeting.greeting__left__list_link}
              href="https://github.com/den4k-pr"></Link>
          </li>
          <li>
            <Link
              style={{ backgroundImage: `url('/telegram.svg')`, backgroundSize: '40px' }}
              className={greeting.greeting__left__list_link}
              href="https://t.me/WorkPlH"></Link>
          </li>
        </ul>
      </GretingLeftAnimation>
      <GretingLeftAnimation time={1000} transform={-50}>
        <div className={greeting.greeting__left__platforms}>
          <p className={greeting.greeting__left__platforms_text}>Tech Stack</p>
          <ScrolBox />
        </div>
      </GretingLeftAnimation>
    </div>
  );
};
