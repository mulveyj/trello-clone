import React from 'react';
import '../node_modules/bulma/css/bulma.css';
import './App.css';
 

class NavBar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className='nav-center'>
                    <h1>Trello</h1>

                </div>
            </nav>
        )
    }
}

export default NavBar;