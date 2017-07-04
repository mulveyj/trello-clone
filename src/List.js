import React from 'react';
import Card from './Card';
import NewCard from './NewCard';
import PropTypes from 'prop-types';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            newCardText: ''
        }
        this.addCard = this.addCard.bind(this);
        this.cancelCard = this.cancelCard.bind(this);
        this.handleNewCard = this.handleNewCard.bind(this);
    }
    handleNewCard (e) {
        e.preventDefault();
        const text = e.target.children[1].children[0].value;
        this.props.addCardText(text);
        this.setState({
            addNew: false,
            newCardText: ''
        });
    }
    render() {
        return (
            <div className='column'>
                <div className='box'>
                    <h1>{this.props.title}</h1>
                    {Object.keys(this.props.cards).map((elem) => {
                        if (this.props.cards[elem].listID === this.props.listID)
                            return <Card cardData={this.props.cards[elem]}
                                        showModal={this.props.showModal}/>;
                    })}
                    <div className='block'>
                        {(this.state.addNew === true) ? 
                            <NewCard 
                            cancelCard={this.cancelCard} 
                                cardText={this.state.newCardText } 
                                addCard={this.handleNewCard}/> :
                            <a className='button is-link' onClick={this.addCard}>Add a Card...</a>
                        }
                    </div>
                </div>
            </div>
        )
    }
    addCard() {
        this.setState({ addNew: true })
    }
    cancelCard() {
        this.setState({ addNew: false })
    }
}

List.propTypes = {
    addCardText: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.object.isRequired,
    listID: PropTypes.string.isRequired,
    showModal:PropTypes.func
};

export default List;