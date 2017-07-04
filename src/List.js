import React from 'react';
import Card from './Card';
import NewCard from './NewCard';

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
        // get data from event
        const text = e.target.children[1].children[0].value;
        // this.setState({
        //     newCardText:text
        // });
        // call addCard 
        console.dir(this);
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
                            return <Card title={this.props.cards[elem].cardTitle} 
                                        comments={this.props.cards[elem].comments}/>;
                    })}
                    <div className='block'>
                        {(this.state.addNew === true) ? 
                            <NewCard cancelCard={this.cancelCard} 
                                cardText={this.state.newCardText }addCard={this.handleNewCard}/> :
                            <a className='button is-link' onClick={this.addCard}>Add a card...</a>
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

export default List;