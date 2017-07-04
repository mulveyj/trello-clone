import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    render() {
        return (
         <div className="modal">
            <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <button className="delete"></button>
                    </header>
                    <section className="modal-card-body">
                        <Card title={this.props.card.cardTitle} comments={this.card.comments} />
                    </section>
                    <footer className="modal-card-foot">
                        <a className="button is-success">Move To</a>
                        <a className="button">Cancel</a>
                    </footer>
                </div>
        </div>   
        );
    }
}

Modal.propTypes = {
    lists: PropTypes.object.isRequired,
    card:PropTypes.object.isRequired
};

export default Modal;