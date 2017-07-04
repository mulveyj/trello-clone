import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        return (
            <div className='card' onClick={this.props.showModal} value={this.props.cardData.cardID}>
                <div className='card-content'>
                    {this.props.cardData.cardTitle}
                    <Comment data={this.props.cardData.comments}/>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    cardData:PropTypes.object.isRequired,
    showModal:PropTypes.func
};

// Card.defaults = {
//     showModal: () => {}
// };

export default Card;