import './Section.scss';

const TitleAndSubtitle = ({title, subtitle, date}) => {
    return (
        <li>
            <ul id="content-title-date-grouping">
                <li className="text-elem shrink-0 mt-0 text-gray-700 text-lg font-medium dark:text-white">
                    {title}
                </li>
                <li className="text-elem shrink-0 mt-0 text-gray-700 text-md font-medium dark:text-white">
                    {date}
                </li>
            </ul>
            <p className="text-elem shrink-0 mt-0 text-left text-gray-500 text-sm font-normal">
                {subtitle}
            </p>
        </li>
    )
}

export default TitleAndSubtitle;