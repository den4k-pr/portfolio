'use client';

import Link from 'next-intl/link';
import lang from '../Lauout.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const ObjectLanguages = ({ locale }: { locale: string }) => {
  const [buttonLang, setButtonLang] = useState(false);
  const [langIndex, setLangIndex] = useState('UA');
  const excludedBlockRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (excludedBlockRef.current && !excludedBlockRef.current.contains(event.target)) {
        setButtonLang(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={excludedBlockRef} className={lang.lang}>
      <div onClick={() => setButtonLang(!buttonLang)} className={lang.lang__box}>
        <Image src={'/lang/' + locale + '.png'} alt="" width={30} height={30} />
        <p>{locale.toLocaleUpperCase()}</p>
      </div>
      <ul
        style={{
          transform: buttonLang ? 'translateY(0)' : 'translateY(-30px)',
          opacity: buttonLang ? '1' : '0',
          visibility: buttonLang ? 'visible' : 'hidden',
        }}
        className={lang.lang__list}>
        {locale !== 'ua' && (
          <li>
            <Link
              onClick={() => setLangIndex('UA')}
              className={lang.lang__list_link}
              href="/"
              locale="ua">
              <Image src="/lang/ua.png" alt="" width={30} height={30} />
              <p>UA</p>
            </Link>
          </li>
        )}
        {locale !== 'en' && (
          <li>
            <Link
              onClick={() => setLangIndex('EN')}
              className={lang.lang__list_link}
              href="/"
              locale="en">
              <Image src="/lang/en.png" alt="" width={30} height={30} />
              <p>EN</p>
            </Link>
          </li>
        )}
        {locale !== 'pl' && (
          <li>
            <Link
              onClick={() => setLangIndex('PL')}
              className={lang.lang__list_link}
              href="/"
              locale="pl">
              <Image src="/lang/pl.png" alt="" width={30} height={30} />
              <p>PL</p>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
