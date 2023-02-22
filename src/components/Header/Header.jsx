import '../../Tailwind.css'
import './Header.scss'

const Header = () => {

    return (
        <>
        <div id="title-info">
            <p class="inline-block normal-case text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-700">
                Bryce Schultz
            </p>
            <p class="mt-2 mb-10 text-lg text-slate-500">
                Software Engineer
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