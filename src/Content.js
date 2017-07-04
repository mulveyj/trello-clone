import React from 'react';
import List from './List';
import uuid from 'uuid/v1';
import './App.css';
import NewList from './NewList';

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
            },
            addNewList: false
        };
        this.displayNewListBox = this.displayNewListBox.bind(this);
        this.handleNewList = this.handleNewList.bind(this);
        this.cancelList = this.cancelList.bind(this);
        // this.addListToContent = this.addListToContent.bind(this);
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
                            <div className='column'>
                                    {(this.state.addNewList === true)
                                        ? <NewList   cancelList={this.cancelList} 
                                                    addList={this.handleNewList}/> 
                                        : <a className='button is-info' onClick={this.displayNewListBox}>Add a List...</a>
                                    }
                            </div>
                    </div>
                </div>
            </section>
        );
    }
    createID () {
        return uuid();
    }
    addCardToList (id, text) {
        var newCards = Object.assign({}, this.state.cards);
        const newID = this.createID();
        newCards[newID] = {cardID:newID, cardTitle:text, listID:id, comments:{}};
        this.setState({
            cards:newCards
        });

    }
    displayNewListBox() {
        this.setState({
            addNewList: true
        });
    }
    handleNewList(e) {
        e.preventDefault();
        const title = e.target.children[1].children[0].value;
        const newID = this.createID();
        const newLists = Object.assign({}, this.state.lists);
        newLists[newID] = {listID:newID, listTitle:title};
        this.setState({
            lists:newLists,
            addNewList:false
        });
    } 
    cancelList () {
        this.setState({
            addNewList: false
        });
    }
}

export default Content;