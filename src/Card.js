import React from 'react';
import Comment from './Comment';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    <Comment title={this.props.title}/>
                </div>
            </div>
        )
    }
}

export default Card;