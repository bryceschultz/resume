import Link from "../../../Link/Link"

const recentTraining = [
    "Participated in a Full Stack Engineering Training offered by Liberty Mutual."
]

const RecentTraining = () => {
    return (
        
        <ul className="list-disc list-inside flex flex-wrap flex-col">
           <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                <Link text={"Fast AI"} link={"https://www.fast.ai/"} /> course taught by <Link text={"Jeremy Howard"} link={"https://jeremy.fast.ai/"} />. <Link text={"(In Progress)"} link={"https://github.com/bryceschultz/fastai"} />
            </li>
            <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                9-Month Full Stack Engineering Program offered by Liberty Mutual & PluralSight. (Completed Sep. 2023)
            </li>
            <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                9-Month Data Engineering Program offered by Liberty Mutual & Udacity. (Completed Dec. 2021)
            </li>
        </ul>
    )
}

export default RecentTraining