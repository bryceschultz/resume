import React from "react";
import TitleAndSubtitle from "../../TitleAndSubtitle";
import './ExperienceSection.scss';
import { useInformalToggleContext } from "../../../Toggle/context/InformalToggleContext";
import LM_Logo from '../../../../assets/images/LibertyMutual_Logo.png';
import ACN_Logo from '../../../../assets/images/Accenture_Logo.png';
import CardRotatingContainer from "../../../Card/CardRotatingContainer";
import ExperienceCard from "../../../Card/ExperienceCard/ExperienceCard";

const libertyExperience = [
    'Spearheaded the development and planning of new feature/functionality rollout for a global internal auditing application in a production environment, using feature flags where appropriate. (Java/Spring/React)',
    'Responsible for investigating and fixing production issues if and when they arrive.',
    'Solved a scaling problem in a python script which downloaded files/data from internal auditing application to provide to impacted employees/auditors post divestiture. (Python/PyMySQL/AWS SDK/S3)',
    'Developed and supported a fraud auditing application. (Mongo/Express/React/Node)',
    'Developed AWS Lambdas to move files from SharePoint to S3 after an audit had been completed for long term storage & cost savings. (CDK/SQS/Lambda/JavaScript)',
    'Engineered an innovative data pipeline application, streamlining complex data sets for the catastrophe modeling team resulting in an annual cost savings of $20,000 for the IT team. (Python/Numpy/Pandas)',
    'Successfully deployed a production-ready API empowering the catastrophe modeling team to upload peril maps, significantly enhancing risk evaluation for underwriters. (ESRI)',
    'Developed bash scripts to setup virtual machines with appropriate software for catastrophe modelers. (Azure Blob/SMB/Bash/PowerShell)',
    'Invited by management to join the Corporate Functions Leaders group, where I led employee sentiment surveys across the organization and presented results back to upper management.'
]
const accentureExperience = [
    'As the Principal Business Analyst for a multinational pharmaceutical client, orchestrated the consolidation of Veeva CRM systems across 30+ countries post-merger.',
    'Coordinated end-to-end processes, including new country onboarding, user story development, software development, testing, user migration, and final approval from IT directors.',
    'Developed a Salesforce communities portal for a U.S. state, facilitating subsidized childcare for essential workers during the pandemic.'
]

const ExperienceSection = () => {
    const { informalToggle } = useInformalToggleContext();

    return (
        <>
            {(informalToggle ) ? (
                <>
                <CardRotatingContainer>
                    <ExperienceCard
                        company="Liberty Mutual"
                        image={LM_Logo}
                        title="Software Engineer"
                        highlightedWork={libertyExperience}
                        id={0}
                    />
                    <ExperienceCard
                        company="Accenture"
                        image={ACN_Logo}
                        title="Technology Associate"
                        highlightedWork={accentureExperience}
                        id={1}
                    />
                </CardRotatingContainer>
                </>
            ) : (
                <>
                <ul id="experience-section">
                    <TitleAndSubtitle
                        title="Liberty Mutual Insurance"
                        subtitle="Software Engineer"
                        date="November 2020 - Present"
                    />
                    <ul className="list-disc list-inside bullet-list mb-5">
                        {libertyExperience.map(((bullet, i) => <li key={i} className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{bullet}</li>))}
                    </ul>
                    <TitleAndSubtitle
                        title="Accenture"
                        subtitle="Technology Associate"
                        date="October 2019 - November 2020"
                    />
                    <ul className="list-disc list-inside bullet-list">
                        {accentureExperience.map(((bullet, i) => <li key={i} className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{bullet}</li>))}
                    </ul>
                </ul>
                </>
            )}
        </>
    )
}

export default ExperienceSection;
