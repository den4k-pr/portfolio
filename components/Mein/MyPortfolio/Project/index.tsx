"use client"

import Link from 'next/link';
import portfolio from '../MyPortfolio.module.scss';
import cn from "classnames"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Project = ({ image, link }: { image: string; link: string }) => {
  const [projectInfo, setProjectInfo] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${portfolio.portfolio__projects_partBody_part}`)) {
      setProjectInfo(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const HendleClick = (value: boolean) => {
    setTimeout(() => {
      setProjectInfo(value)
    }, 200)
  }

  return (
    <figure
      onClick={() => (HendleClick(!projectInfo), handleClickOutside)}
      style={{ backgroundImage: `url(/${image}.png)` }}
      className={cn(portfolio.portfolio__projects_partBody_part, projectInfo && portfolio.portfolio__projects_partBody_partAnim)}>
      <div style={{opacity: projectInfo ? "0" : "1"}} className={portfolio.video_play_button}><Image style={{marginTop: "-5px"}} src="/click.svg" width={30} height={30} alt='Click' /></div>
      <figcaption style={{
        transform: projectInfo ? "translate(-50%, 45%)" : "translate(-50%, 100%)"
      }} className={portfolio.portfolio__projects_partBody_part__content}>
        <Link
          className={portfolio.portfolio__projects_partBody_part__content_visit}
          href={link}></Link>
      </figcaption>
    </figure>
  );
};
