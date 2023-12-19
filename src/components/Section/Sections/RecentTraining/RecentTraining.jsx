import Link from "../../../Link/Link"

const recentTraining = [
    "Participated in a Full Stack Engineering Training offered by Liberty Mutual."
]

const RecentTraining = () => {
    return (
        
        <ul className="list-disc list-inside flex flex-wrap flex-col">
           <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                <Link text={"Fast AI"} link={"https://www.fast.ai/"} /> course taught by <Link text={"Jeremy Howard"} link={"https://jeremy.fast.ai/"} />
            </li>
            <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                9-Month Full Stack Engineering Training offered by Liberty Mutual, Sika Education, and <Link text={"Kyle Coberly"} link={"https://kylecoberly.github.io/resume/"} />
            </li>
            <li className="text-elem shrink-0 mt-0 text-left text-sm font-normal mt-1">
                6-Month Data Engineering Training offered by Liberty Mutual, and PluralSight.
            </li>
        </ul>
    )
}

export default RecentTraining