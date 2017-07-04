import React from 'react';
import PropTypes from 'prop-types';

class NewCard extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    <form onSubmit={this.props.addCard} className='field is grouped'>
                        <label className='label'>New Card</label>
                        <p className='control'>
                            <textarea id='TESTTESTTEST' className='textarea' placeholder='Enter text'>
                            {this.props.cardText}</textarea>
                        </p>
                        <button className='button is-success'>Add</button>
                        <a className='delete is-medium' onClick={this.props.cancelCard}></a>
                    </form>
                </div>
            </div>
        )
    }
}

NewCard.propTypes = {
    addCard: PropTypes.func.isRequired,
    cardText:PropTypes.string.isRequired,
    cancelCard: PropTypes.func.isRequired
};

export default NewCard;