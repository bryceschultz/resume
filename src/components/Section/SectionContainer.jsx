import '../../Tailwind.css';
import SectionHeader from './SectionHeader';

const SectionContainer = ({
    children,
    headerText
    }) => {
    return (
        <>
        <div className="list-element flex justify-start overflow-x-clip border-gray-200 mt-6 space-x-4 border-b">
            <SectionHeader text={headerText} />
        </div>
        <div>
            {children}
        </div>
        </>
    )
}

export default SectionContainer;