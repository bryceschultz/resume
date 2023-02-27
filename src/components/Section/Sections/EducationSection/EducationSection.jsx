import TitleAndSubtitle from "../../TitleAndSubtitle";

const relevantCoursework = ["DS768 – Forecasting Analytics", "DS562 – Business Applications Development",
                            "DS773 – Database Management and Systems Analysis", "DS766 – Business Analytics and Spreadsheet Modelling", 
                            "ADMN410 – Management Information Systems"]

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
        <p className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-3">Relevant coursework: </p>
        <ul className="list-disc list-inside flex flex-wrap flex-col">
            {relevantCoursework.map(((course, i) => <li key={i} className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{course}</li>))}
        </ul>
        </>
    )
}

export default EducationSection;

