import { useState } from 'react';
import './Card.scss';

const Card = ({image, title, company, highlightedWork}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        <div className="card-container w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex flex-col items-start items-center">
            <img className="card-image" src={image} />
            <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <button onClick={() => setShowModal(true)} className="w-full inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See More</button>
            </div>
        </div>
    </div>
    { showModal ? <div className="overlay" /> : null}
    { showModal && 
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="modal-container">
                <div className="modal-sub-container relative h-full max-w-md md:h-auto">
                    <div className="modal relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => setShowModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 pt-6 lg:px-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">While at {company}</h3>
                        </div>
                        <div className="p-6">
                            {highlightedWork.map((bullet => <li className="leading-relaxed text-sm text-gray-500 dark:text-gray-400">{bullet}</li>))}

                        </div>
                    </div>
                </div>
            </div>
    }

        </>
    )
}

export default Card;