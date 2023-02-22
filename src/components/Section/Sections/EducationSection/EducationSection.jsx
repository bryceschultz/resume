import TitleAndSubtitle from "../../TitleAndSubtitle";

const relevantCoursework = ["DS768 – Forecasting Analytics", "DS773 – Database Management and Systems Analysis", 
        "DS766 – Business Analytics and Spreadsheet Modelling", "ADMN410 – Management Information Systems",
        "DS562 – Business Applications Development", "DS775 – Corporate Project Experience"]

const EducationSection = () => {
    return (
        <>
        <ul>
        <TitleAndSubtitle
            title="University of New Hampshire"
            subtitle="Business Administration, Information Systems and Business Analytics, GPA 3.5"
            date="June 2019"
        />
        </ul>
        <p class="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-3">Relevant coursework: </p>
        <ul class="list-disc list-inside flex flex-wrap flex-col">
            {relevantCoursework.map((course => <li class="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{course}</li>))}
        </ul>
        </>
    )
}

export default EducationSection;

