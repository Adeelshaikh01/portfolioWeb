import { Link } from 'react-router-dom'
import './css/style.css'

function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container">
                <Link className="navbar-brand" to='/'>ADEEL<span className="dot">.</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link linkHover" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkHover" to='/Skills'>Skills</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link linkHover" to='/Experience'>Experience</Link> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkHover" to='/Project'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkHover" disabled to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;