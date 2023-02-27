const SectionHeader = 
    ({
        text
    }) => {
    return (
        <p className="input-elem flex whitespace-nowrap max-w-xs truncate focus:outline-0 focus:ring-0 pr-1 pl-1 pt-2 pb-2 text-md font-medium text-blue-500 border-blue-600 border-b-2 dark:text-blue-400">
            {text}
        </p>
    )
}

export default SectionHeader;