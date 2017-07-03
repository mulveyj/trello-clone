import React from 'react';
import './App.css';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
import Content from './Content';
import '../node_modules/bulma/css/bulma.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <TitleBar />
                <Content />
            </div>
        );
    }
}

export default App;