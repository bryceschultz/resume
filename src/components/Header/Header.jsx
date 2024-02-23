import '../../Tailwind.css'
import './Header.scss'

const Header = () => {

    return (
        <>
            <div id="title-info">
                <p className="inline-block normal-case text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-700">
                    Bryce Schultz
                </p>
                <p className="text-lg text-slate-500">
                    Software Engineer
                </p>
                <p className="text-lg text-slate-500">
                    Boston, MA
                </p>
            </div>
            <div id="contact-info">
                <p className="font-mono text-sm text-slate-500">
                    <a href="mailto:bryceschultz26@gmail.com">
                        bryceschultz26@gmail.com
                    </a>
                </p>
                <p className="font-mono text-sm text-slate-500">
                    603-674-9662
                </p>
                <p className="font-mono text-sm text-slate-500">
                    <a href="https://linkedin.com/in/bryceschultz/">
                        linkedin.com/in/bryceschultz/
                    </a>
                </p>
            </div>
        </>
    )
}

export default Header;