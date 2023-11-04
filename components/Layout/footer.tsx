'use client';
import { useParams } from 'next/navigation';
import footer from './Lauout.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const router = useParams();

  return (
    <>
      {!router.slug ? (
        <footer className={footer.footer}>
          <div className="container">
            <p className={footer.footer__text}>
              Copyright &copy; 2023 | All Rights Reserved.
            </p>
            <button onClick={scrollToTop}></button>
          </div>
        </footer>
      ) : null}
    </>
  );
};
