'use client';

import { Link } from 'react-scroll';
import header from './Lauout.module.scss';
import { useOutside } from './BurgerMenu';
import cn from 'classnames';
import { ObjectLanguages } from './ObjectLanguages';
import { useParams } from 'next/navigation';
import { AnimationLink } from './AnimationLink';

interface HeaderTranslate {
  locale: string;
  home: string;
  about: string;
  skills: string;
  portfolio: string;
  contact: string;
}

export const Header = ({ locale, home, about, skills, portfolio, contact }: HeaderTranslate) => {
  const { ref, isShow, setIsShow } = useOutside(false);

  const list = [
    {
      inf: 'home',
      text: home,
      time: 0.5,
    },
    {
      inf: 'about',
      text: about,
      time: 0.8,
    },
    {
      inf: 'skills',
      text: skills,
      time: 1.1,
    },
    {
      inf: 'portfolio',
      text: portfolio,
      time: 1.4,
    },
    {
      inf: 'contact',
      text: contact,
      time: 1.7,
    },
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 74,
        behavior: 'smooth',
      });
    }
  };

  const router = useParams();

  return (
    <>
      {!router.slug ? (
        <header ref={ref} className={header.header}>
          <div className="container">
            <p className={header.header__logo}>Portfolio.</p>
            <div
              onClick={() => setIsShow(!isShow)}
              className={cn(header.header__burger, isShow === true ? 'burger_active' : '')}>
              <div className="burger_line"></div>
              <div className="burger_line"></div>
              <div className="burger_line"></div>
            </div>
            <ul
              style={{ transform: isShow === true ? 'translateY(0%)' : 'translateY(-100%)' }}
              className={header.header__list}>
              {list.map((el, index) => (
                <AnimationLink key={index} time={el.time}>
                  <li key={el.inf}>
                    <Link
                      className={header.header__list_link}
                      onClick={() => (scrollToElement(`${el.inf}`), setIsShow(!isShow))}
                      duration={1000}>
                      {el.text}
                    </Link>
                  </li>
                </AnimationLink>
              ))}
            </ul>
            <ObjectLanguages locale={locale} />
          </div>
        </header>
      ) : null}
    </>
  );
};
