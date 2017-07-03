import React from 'react';
import '../node_modules/bulma/css/bulma.css';


class TitleBar extends React.Component {
    render() {
        return (
            <section className='section is-paddingless'>
                <div className='container'>
                <h3 className='title is-3'>Board Name</h3>
                </div>
            </section>
        )
    }
}

export default TitleBar;