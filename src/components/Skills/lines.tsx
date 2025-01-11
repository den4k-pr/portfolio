import { skillsLine } from "../../templates/tableSkills";

export const SkillsLines = () => {
    return (
        <section className="skills__line">
            <div className="line">
                <div className="line__track">
                    <div className="line__track-row">
                        {skillsLine.map((item, index) => {
                            const className = `
                                line__track-row-item
                                ${index % 4 === 1 ? 'firstActiveIcon' : ''}
                                ${index % 6 === 4 ? 'secondActiveIcon' : ''}
                            `.trim();

                            return (
                                <img
                                    key={index}
                                    className={className}
                                    src={item}
                                    alt={`skill-${index + 1}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
