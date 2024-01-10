import { useInformalToggleContext } from "../../../Toggle/context/InformalToggleContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillsSection.scss';

const skills = ["HTML, CSS, Javascript", "ReactJS", "NodeJS", "Java", "Spring, Springboot",
                "SQL", "Python"]
const SkillsSection = () => {
    const { informalToggle } = useInformalToggleContext();

    return (
        <>
        {(informalToggle) ? (
            <>
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'html5']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'css3-alt']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'square-js']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'react']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'node']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'java']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'python']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'html5']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'css3-alt']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'square-js']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'react']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'node']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'java']}  />
                </div>
                <div className="slide">
                    <FontAwesomeIcon icon={['fab', 'python']}  />
                </div>
            </div>
        </div>
            </>
        ) : (
            <>
            <ul className="list-disc list-inside flex flex-wrap flex-col h-24">
                {skills.map(((skill, i) => <li key={i} className="text-elem shrink-0 text-left text-sm font-normal mt-1">{skill}</li>))}
            </ul>
            </>
        )}
    </>
    )
}

export default SkillsSection;
