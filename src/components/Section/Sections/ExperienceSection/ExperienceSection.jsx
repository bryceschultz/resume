import React, { useState } from "react";
import TitleAndSubtitle from "../../TitleAndSubtitle";
import './ExperienceSection.scss';
import { useInformalToggleContext } from "../../../Toggle/context/InformalToggleContext";
import 'react-vertical-timeline-component/style.min.css';
import LM_Logo from '../../../../assets/images/LibertyMutual_Logo.png';
import ACN_Logo from '../../../../assets/images/Accenture_Logo.png';
import CardRotatingContainer from "../../../Card/CardRotatingContainer";
import Card from "../../../Card/Card";

const libertyExperience = [
    `Responsibilities include building out new components/functionality, developing unit tests, 
    fixing bugs, and working with the business users to understand priority and timing of new features
     for an auditing application with over 200 users globally.`,
    `Developed a data pipeline application which makes complex data sets available in a format
    that's easily consumable by the catastrophe modelling team for hurricane, tornado, and terrorism modelling and 
    is expected to save the IT Team $20,000 annually.`,
    `Developed an API that is currently in production that enables the catastrophe modeling team to upload peril maps for underwriters to
    more accurately evaluate the risk associated with a particular policy/location.`
]
const accentureExperience = [
    `Worked as the lead Business Analyst for a global pharmaceutical client to consolidate their 
    Veeva CRM systems post merger across 30+ countries.`,
    `Work involved coordinating new country onboarding, user story development, software development, testing,
     user migration, and final sign off from IT directors.`,
    `Developed a Salesforce communities portal for a state within the U.S. which allowed 
    essential workers to receive subsidized childcare during the pandemic. Wrote Apex
    code which persists in the production environment.`
]

const ExperienceSection = () => {
    const { informalToggle } = useInformalToggleContext();

    return (
        <>
            {(informalToggle ) ? (
                <>
                <CardRotatingContainer>
                    <Card 
                        company="Liberty Mutual"
                        image={LM_Logo}
                        title="Software Engineer"
                        highlightedWork={libertyExperience}
                        id={0}
                    />
                    <Card 
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
                        date="November 2021 - Present"
                    />
                    <ul className="list-disc list-inside bullet-list mb-5">
                        {libertyExperience.map(((bullet, i) => <li key={i} className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">{bullet}</li>))}
                    </ul>
                    <TitleAndSubtitle
                        title="Accenture"
                        subtitle="Technology Associate"
                        date="October 2020 - November 2021"
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
