import React, { Component } from 'react';


class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>

                </nav>

            </div>
        );
    }
}

export default Navigation;