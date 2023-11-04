import { LayoutAnimationSkroll } from '../../Layout/LayoutAnimationSkroll';
import portfolio from './MyPortfolio.module.scss';
import { Project } from './Project';

interface PortfolioTranslation {
  latestProjectTitle: string;
  latestProjectSpan: string;
  sectionProjectsOne: string;
  sectionProjectsTwo: string;
}

export const MyPortfolio = ({ sectionProjectsOne, sectionProjectsTwo, latestProjectTitle, latestProjectSpan }: PortfolioTranslation) => {
  return (
    <section id="portfolio" className={portfolio.portfolio}>
      <div className="container">
        <h2 className="title">
          {latestProjectTitle} <span style={{ display: 'initial' }}>{latestProjectSpan}</span>
        </h2>
        <div className={portfolio.portfolio__projects}>
          <div className={portfolio.portfolio__projects_section}>
            <h3 className={portfolio.portfolio__projects_section_title}>{sectionProjectsOne}</h3>
            <nav className={portfolio.portfolio__projects_section_box}>
              <LayoutAnimationSkroll
                className={portfolio.portfolio__projects_partBody}
                transform="translateX(-100px)">
                <Project image="drop" link="https://raftel-shop.vercel.app/" />
              </LayoutAnimationSkroll>
              <LayoutAnimationSkroll
                className={portfolio.portfolio__projects_partBody}
                transform="translateX(100px)">
                <Project image="market" link="https://catalog-gamma.vercel.app/" />
              </LayoutAnimationSkroll>
            </nav>
          </div>
          <div className={portfolio.portfolio__projects_section}>
            <h3 className={portfolio.portfolio__projects_section_title}>{sectionProjectsTwo}</h3>
            <nav className={portfolio.portfolio__projects_section_box}>
              <LayoutAnimationSkroll
                className={portfolio.portfolio__projects_partBody}
                transform="translateX(-100px)">
                <Project image="company" link="https://company-eosin.vercel.app/" />
              </LayoutAnimationSkroll>
              <LayoutAnimationSkroll
                className={portfolio.portfolio__projects_partBody}
                transform="translateX(100px)">
                <Project image="boost" link="https://game-site-chi.vercel.app/" />
              </LayoutAnimationSkroll>
              <LayoutAnimationSkroll
                className={portfolio.portfolio__projects_partBody}
                transform="translateX(100px)">
                <Project image="car" link="https://den-prof.github.io/str/" />
              </LayoutAnimationSkroll>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
