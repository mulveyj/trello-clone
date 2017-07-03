import React from 'react';
import List from './List';

class Content extends React.Component {
    render() {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <h1>Content</h1>
                            <List />
                        </div>
                         <div className='column'>
                            <h1>Content</h1>
                            <List />
                        </div>
                         <div className='column'>
                            <h1>Content</h1>
                            <List />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;