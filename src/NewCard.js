import React from 'react';

class NewCard extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.title}
                    <div className='field'>
                        <label className='label'>New Card</label>
                        <p className='control'>
                            <textarea className='textarea' placeholder='Enter text'>
                            </textarea>
                        </p>
                    </div>
                    <button className='button is-success'>Add</button>
                    <a className='delete is-medium' onClick={this.props.cancelCard}></a>
                </div>
            </div>
        )
    }
}

export default NewCard;