import React from 'react';
import List from './List';
import uuid from 'uuid/v1';
import './App.css';

class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: {
                '1':{listID: '1', listTitle: 'To Do'},
                '2':{listID: '2', listTitle: 'In Progress'},
                '3':{listID: '3', listTitle: 'Done'}
            },
            cards: {
                '1': {cardID:'1', cardTitle: 'Make new Trello', listID: '1', 
                    comments:{'1':'Brilliant', '2':'Lovin\' it'}},
                '2':{cardID:'2', cardTitle: 'Make pretty', listID: '1',
                    comments:{'1':'Rubbish', '2':'OK'}},
                '3':{cardID: '3', cardTitle:'Initial Layout', listID:'3',
                    comments:{'1':'All done', '2':'Took a while'}},
                '4':{cardID:'4', cardTitle:'Implement Functionality', listID:'2',
                    comments:{'1':'Tired now', '2':'Bit bored'}}
            }
        };
        // this.addCardToList = this.addCardToList.bind(this);
    }
    render() {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                            {Object.keys(this.state.lists).map((elem) => {
                                const {listID, listTitle} = this.state.lists[elem];
                               return <List title={listTitle}
                                            listID={listID}
                                            cards={this.state.cards}
                                            addCardText={this.addCardToList.bind(this, listID)}/>;
                            })}
                        </div>
                    </div>
            </section>
        );
    }
    createCardID () {
        return uuid();
    }
    addCardToList (id, text) {
        console.log(id);
        var newCards = Object.assign({}, this.state.cards);
        const newID = this.createCardID();
        console.log(newID);
        // const text = e.target.children[1].children[0].value;
        console.log(text);
        newCards[newID] = {cardID:newID, cardTitle:text, listID:id, comments:{}};
        console.log(newCards, typeof newCards);
        this.setState({
            cards:newCards
        });

    }
}

export default Content;