import React from 'react';
import Card from './Card';

class List extends React.Component {
    render() {
        return (
            <div className='box'>
                <h1>List</h1>
                <Card title="New Thing To Do"/>
                <Card />
                <Card />
            </div>
        )
    }
}

export default List;