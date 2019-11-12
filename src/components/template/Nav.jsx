import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
(
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/home">
                <i className="fa fa-list-alt"></i> CineNature
            </Link>
            <Link to='/sobre'>
                <i className="fa fa-list-alt"></i> Sobre
            </Link>
        </nav>
    </aside>
)