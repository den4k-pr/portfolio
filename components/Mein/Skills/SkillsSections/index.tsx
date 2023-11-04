import Image from 'next/image';
import skills from '../Skills.module.scss';

interface ArrowSkills {
  name: string;
  img: string;
  procent: string;
}

export const SkillsSelections = ({ arrow, title }: { arrow: ArrowSkills[]; title: string }) => {
  return (
    <>
      <h2 className={skills.skills__body_title}>{title}</h2>
      <div className={skills.skills__body__content}>
        {arrow.map((el) => (
          <nav className={skills.skills__body__content_section}>
            <Image
              className={skills.skills__body__content_section_image}
              src={el.img}
              width={35}
              height={35}
              alt={el.name}
            />
            <h3 className={skills.skills__body__content_section_title}>{el.name}</h3>
          </nav>
        ))}
      </div>
    </>
  );
};
