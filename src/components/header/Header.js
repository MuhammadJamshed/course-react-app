import React from 'react'
import logo from '../../assets/logoo.png'
import './Header.css'
export default function Header() {
    return (
        <div className="wrapper">
            <div className="header-inner">
                <div className="item">
                    <img src={logo} alt="" />
                </div>
                <div className="item">
                    <ul>
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">Sign in/ Register</a></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Every day Value </a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="#">Make it a meal</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Signature Box</a>
                            </li>


                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                            <li className="nav-item">
                                <a className="nav-link" href="#">0</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}
