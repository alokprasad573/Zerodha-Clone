import React from 'react'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top border-bottom navbar-light bg-light" style={{backgroundColor:"grey"}}>
            <div className="container">
                <a className="navbar-brand p-3" href="#">
                    <img src="media/images/logo.svg" alt="logo" style={{width:"40%"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}