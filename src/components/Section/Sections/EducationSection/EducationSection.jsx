import TitleAndSubtitle from "../../TitleAndSubtitle";
import { useInformalToggleContext } from "../../../Toggle/context/InformalToggleContext";
import UNH_Logo from '../../../../assets/images/UNH_Logo.svg';
import './EducationSection.scss';

const relevantCoursework = ["DS768 – Forecasting Analytics", "DS562 – Business Applications Development",
    "DS773 – Database Management and Systems Analysis", "DS766 – Business Analytics and Spreadsheet Modelling",
    "ADMN410 – Management Information Systems"]

const EducationSection = () => {
    const { informalToggle } = useInformalToggleContext();

    return (
        <>
            {(informalToggle) ? (
                <div id="education-informal">
                    <div style={{maxWidth:"500px"}}>
                    <img src={UNH_Logo} />  
                    <div className="gpa-details">
                    <p className="text-elem shrink-0 text-left text-gray-700 text-3xl font-semibold z-10">3.5 GPA</p>
                    <div class="progress-bar">
                    <div class="relative flex flex-wrap items-center w-full bg-blue-100 h-2 rounded-lg">
                    <div class="bg-blue-500 flex-col h-full rounded-lg" style={{width: "87.5%", transition: "all 2s ease 0s"}}>
                        </div>
                        </div>
                        </div>              
                    <p className="text-elem shrink-0 mt-0 text-left text-gray-500 text-sm font-normal z-10">Information Systems & Business Analytics</p>
                    <p className="text-elem shrink-0 mt-0 text-left text-gray-500 text-sm font-normal z-10">Peter T. Paul College of Business and Economics</p>
                    </div>
                    </div>
                </div>
            ) : (
                <>
                    <ul>
                        <TitleAndSubtitle
                            title="University of New Hampshire"
                            subtitle="Business Administration, Information Systems and Business Analytics, GPA 3.5"
                            date="June 2019"
                        />
                    </ul>
                    <p className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-3">Relevant coursework: </p>
                    <ul className="list-disc list-inside flex flex-wrap flex-col">
                        {relevantCoursework.map(((course, i) => <li key={i} className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{course}</li>))}
                    </ul>
                </>
            )}
        </>
    )
}

export default EducationSection;

