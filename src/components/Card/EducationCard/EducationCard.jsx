const EducationCard = ({school, major, gpa, logo}) => {
    const gpaWidthBar = ((gpa / 4) * 100);
    
    return (
        <div style={{maxWidth:"500px"}}>
        <img src={logo} />  
        <div className="gpa-details">
        <p className="text-elem shrink-0 text-left text-gray-700 text-3xl font-semibold z-10">{gpa.toFixed(1)}</p>
        <div class="progress-bar">
        <div class="relative flex flex-wrap items-center w-full bg-blue-100 h-2 rounded-lg">
        <div class="bg-blue-500 flex-col h-full rounded-lg" style={{width: `${gpaWidthBar}%`, transition: "all 2s ease 0s"}}>
            </div>
            </div>
            </div>              
        <p className="text-elem shrink-0 mt-0 text-left text-gray-500 text-sm font-normal z-10">{major}</p>
        <p className="text-elem shrink-0 mt-0 text-left text-gray-500 text-sm font-normal z-10">{school}</p>
        </div>
        </div>
    )
}

export default EducationCard