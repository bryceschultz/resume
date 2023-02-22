import TitleAndSubtitle from "../../TitleAndSubtitle";
import './ExperienceSection.scss';

const libertyExperience = [
    `Currently responsible for the development and support of two auditing applications within the company. The applications
    support over 200 users globally. Responsibilities include building out new components/functionality, developing unit tests, 
    fixing bugs, and working with the business users to understand priority and timing of new features.`,
    `Previously developed a data pipeline application which makes complex data sets available in a format
    that's easily consumable by the business users. The application is expected to save the IT Team $20,000 annually
    and directly impacts the hurricane, tornado, and terrorism predictions made by the catastrophe modeling team.`,
    `Previously developed an API that enables the catastrophe modeling team to upload peril maps for underwriters to
    more accurately evaluate the risk associated with a particular policy/location. Better understanding the risks
    associated with policies/locations is crucial to properly pricing policies. The API is currently in production for
    Canada Earthquake with plans to increase the project scope moving forward.`
]
const accentureExperience = [
    `Worked as the lead Business Analyst for a global pharmaceutical client to consolidate their 
    Veeva CRM systems post merger across 30+ countries. Work involved onboarding new countries, 
    developing user stories, coordinating development and testing, coordinating user migration, 
    and coordinating final sign off from IT directors.`,
    `Developed a Salesforce communities portal for the state of North Carolina which allowed 
    essential workers to receive subsidized childcare during the pandemic. Wrote Apex
    code which persists in the production environment.`
]

const ExperienceSection = () => {
    return (
        <>
            <ul id="experience-section">
                <TitleAndSubtitle
                    title="Liberty Mutual Insurance"
                    subtitle="Software Engineer"
                    date="November 2021 - Present"
                />
                <ul class="list-disc list-inside bullet-list mb-5">
                    {libertyExperience.map((bullet => <li class="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{bullet}</li>))}
                </ul>
                <TitleAndSubtitle
                    title="Accenture"
                    subtitle="Technology Associate"
                    date="October 2020 - November 2021"
                />
                <ul class="list-disc list-inside bullet-list">
                    {accentureExperience.map((bullet => <li class="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{bullet}</li>))}
                </ul>
            </ul>
        </>
    )
}

export default ExperienceSection;
