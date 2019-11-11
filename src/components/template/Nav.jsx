import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
(
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/list">
                <i className="fa fa-list-alt"></i> CineNature
            </Link>
            <Link to='/groups'>
                <i className="fa fa-list-alt"></i> Filmes
            </Link>
        </nav>
    </aside>
)