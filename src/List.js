import React from 'react';
import Card from './Card';
import NewCard from './NewCard';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false
        }
        this.AddCard = this.AddCard.bind(this);
        this.CancelCard = this.CancelCard.bind(this);

    }
    render() {
        return (
            <div className='column'>
                <div className='box'>
                    <h1>{this.props.title}</h1>
                    {Object.keys(this.props.cards).map((elem) => {
                        if (this.props.cards[elem].listID === this.props.listID)
                            return <Card title={this.props.cards[elem].cardTitle} comments={this.props.cards[elem].comments} />;
                    })}
                    <div className='block'>
                        {(this.state.addNew === true) ? <NewCard cancelCard={this.CancelCard} /> :
                            <a className='button is-link' onClick={this.AddCard}>Add a card...</a>
                        }
                    </div>

                </div>
            </div>
        )
    }
    AddCard() {
        this.setState({ addNew: true })
    }
    CancelCard() {
        this.setState({ addNew: false })
    }
}

export default List;