import Image from 'next/image';
import { codSkills, librarykills, libraryBackend, collections } from '../../../utils/stacks';
import skills from './Skills.module.scss';
import { SkillsSelections } from './SkillsSections';
import { LayoutAnimationSkroll } from '../../Layout/LayoutAnimationSkroll';

interface SkillsTranslation {
  skillsTitle: string;
  skillsSpan: string;
}

export const Skills = ({ skillsTitle, skillsSpan }: SkillsTranslation) => {
  return (
    <section id="skills" className={skills.skills}>
      <div className="container">
        <h2 className="title">
          {skillsTitle} <span style={{ display: 'initial' }}>{skillsSpan}</span>
        </h2>
        <div className="skillsSections">
          <LayoutAnimationSkroll transform="translateX(-150px)" className={skills.skills__body}>
            <SkillsSelections arrow={codSkills} title="Coding Skills" />
          </LayoutAnimationSkroll>
          <LayoutAnimationSkroll transform="translateX(150px)" className={skills.skills__body}>
            <SkillsSelections arrow={librarykills} title="Library frontend" />
          </LayoutAnimationSkroll>
          <LayoutAnimationSkroll transform="translateX(-150px)" className={skills.skills__body}>
            <SkillsSelections arrow={libraryBackend} title="Backend Skills" />
          </LayoutAnimationSkroll>
          <LayoutAnimationSkroll transform="translateX(150px)" className={skills.skills__body}>
            <SkillsSelections arrow={collections} title="Build Tools" />
          </LayoutAnimationSkroll>
        </div>
      </div>
    </section>
  );
};
