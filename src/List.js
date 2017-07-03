import React from 'react';
import Card from './Card';

class List extends React.Component {
    render() {
        return (
            <div className='column'>
                <div className='box'>
                    <h1>{this.props.title}</h1>
                    {Object.keys(this.props.cards).map((elem) => {
                        if (this.props.cards[elem].listID === this.props.listID)
                        return <Card title={this.props.cards[elem].cardTitle} comments={this.props.cards[elem].comments}/>;
                    })}
                </div>
            </div>
        )
    }
}

export default List;