import TitleAndSubtitle from "../../TitleAndSubtitle";
import { useInformalToggleContext } from "../../../Toggle/context/InformalToggleContext";
import UNH_Logo from '../../../../assets/images/UNH_Logo.svg';
import BU_Logo from '../../../../assets/images/BU_Logo.png';
import './EducationSection.scss';
import CardRotatingContainer from "../../../Card/CardRotatingContainer";
import EducationCard from "../../../Card/EducationCard/EducationCard";

const unhRelevantCoursework = ["DS768 – Forecasting Analytics", "DS562 – Business Applications Development",
    "DS773 – Database Management and Systems Analysis", "DS766 – Business Analytics and Spreadsheet Modelling",
    "ADMN410 – Management Information Systems"]
const buRelevantCoursework = ["CS232 – Programming with Java", "CS342 – Data Structures with Java",
    "CS472 – Computer Architecture", "CS662 – Computer Language Theory"]

const EducationSection = () => {
    const { informalToggle } = useInformalToggleContext();

    return (
        <>
            {(informalToggle) ? (
                <CardRotatingContainer>
                    <EducationCard
                        school="Boston University"
                        major="Master's in Computer Science"
                        gpa={4.0}
                        logo={BU_Logo}
                        id={0}
                    />
                    <EducationCard
                        school="Peter T. Paul College of Business and Economics"
                        major="Information Systems & Business Analytics"
                        gpa={3.5}
                        logo={UNH_Logo}
                        id={1}
                    />
                </CardRotatingContainer>
            ) : (
                <>
                    <ul>
                        <TitleAndSubtitle
                            title="Boston University"
                            subtitle="Master's in Computer Science, GPA 4.0"
                            date="June 2023 - Current"
                        />
                    </ul>
                    <p className="mb-1 text-elem shrink-0 mt-0 text-left text-sm font-normal mt-3">Relevant coursework: </p>
                    <div className="flex flex-wrap">
                        {buRelevantCoursework.map(((course, i) => <span class="mr-5 mb-2 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{course}</span>))}
                    </div>
                    <ul>
                        <TitleAndSubtitle
                            title="University of New Hampshire"
                            subtitle="Business Administration, Information Systems and Business Analytics, GPA 3.5"
                            date="June 2019"
                        />
                    </ul>
                    <p className="mb-1 text-elem shrink-0 mt-0 text-left text-sm font-normal mt-3">Relevant coursework: </p>
                    <div className="flex flex-wrap">
                        {unhRelevantCoursework.map(((course, i) => <span class="mr-5 mb-2 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{course}</span>))}
                    </div>
                </>
            )}
        </>
    )
}

export default EducationSection;

