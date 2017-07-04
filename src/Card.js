import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

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

Card.propTypes = {
    title: PropTypes.string.isRequired,
    comments:PropTypes.object.isRequired
};

export default Card;