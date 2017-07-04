import React from 'react';
import NavBar from './NavBar';
import TitleBar from './TitleBar';
import Content from './Content';
import '../node_modules/bulma/css/bulma.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <NavBar />
                <TitleBar />
                <Content />
            </div>
        );
    }
}


export default App;