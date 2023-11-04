import greeting from './Greeting.module.scss';
import cn from 'classnames';
import { GretingLeft } from './GretingLeft';
import { GretingRight } from './GretingRight';

export interface Translate {
  title: string;
  animTitle: string;
  subTitle: string;
}

export const Greeting = ({ title, animTitle, subTitle }: Translate) => {
  return (
    <section className={cn('container', greeting.greeting)}>
      <GretingLeft title={title} animTitle={animTitle} subTitle={subTitle} />
      <GretingRight />
    </section>
  );
};
