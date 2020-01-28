import React, { Component } from 'react'
import logo from '../images/rdb.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    state = {
        isOpen: false
    }

    collapseNav = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Logo"></img>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.collapseNav}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                        <li>
                            <Link to='/sign-in'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
