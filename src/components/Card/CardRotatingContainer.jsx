import { useState } from 'react';
import './CardRotatingContainer.scss';

const CardRotatingContainer = ({children}) => {
    const [activeCard, setActiveCard] = useState(children[0])
    const displayNextExperience = () => {
        setActiveCard(children[activeCard.props.id + 1])
    }
    const displayLastExperience = () => {
        setActiveCard(children[activeCard.props.id - 1])
    }
    
    return (
        <div className="experience-cards">
        {( activeCard.props.id !== 0 ) ? (
                        <button id="display-last-btn" onClick={() => displayLastExperience()} className="h-10 input-elem flex-shrink-0 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent font-medium rounded-md border shadow-sm pl-4 pr-4 pt-2 pb-2 text-sm text-blue-500 bg-transparent border-blue-400 focus:ring-blue-400 text-blue-500 hover:bg-blue-100 border-blue-600 mr-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        </button> 


        ) : (
            <button style={{visibility: "hidden"}} className="h-10 input-elem flex-shrink-0 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent font-medium rounded-md border shadow-sm pl-4 pr-4 pt-2 pb-2 text-sm text-blue-500 bg-transparent border-blue-400 focus:ring-blue-400 text-blue-500 hover:bg-blue-100 border-blue-600 mr-20 place-holder-buttons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            </button> 

        )}

        {activeCard}

        {( activeCard.props.id === children.length - 1 ) ? (
            <button style={{visibility: "hidden"}} className="input-elem flex-shrink-0 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent font-medium rounded-md border shadow-sm pl-4 pr-4 pt-2 pb-2 text-sm text-blue-500 bg-transparent border-blue-400 focus:ring-blue-400 text-blue-500 hover:bg-blue-100 border-blue-600 ml-20 place-holder-buttons">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button> 
        ) : (
            <button id="display-next-btn" onClick={() => displayNextExperience()} className="input-elem flex-shrink-0 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent font-medium rounded-md border shadow-sm pl-4 pr-4 pt-2 pb-2 text-sm text-blue-500 bg-transparent border-blue-400 focus:ring-blue-400 text-blue-500 hover:bg-blue-100 border-blue-600 ml-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button> 

        )}
        </div>
    )
}

export default CardRotatingContainer;