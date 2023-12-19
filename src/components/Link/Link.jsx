const Link = ({text, link}) => {
    return (
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={link}>{text}</a> 
    )
}

export default Link