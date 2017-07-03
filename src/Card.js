import React from 'react';
import Comment from './Comment';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.title}
                    <Comment data={this.props.comments}/>
                </div>
            </div>
        )
    }
}

export default Card;