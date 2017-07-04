import React from 'react';
import List from './List';
import uuid from 'uuid/v1';

import {lists, cards} from './data/initialState';
import NewList from './NewList';
import Modal from './Modal';

class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            lists, 
            cards,
            addNewList: false,
            isModalActive: false,
            activeCard:''
        };
        this.displayNewListBox = this.displayNewListBox.bind(this);
        this.handleNewList = this.handleNewList.bind(this);
        this.cancelList = this.cancelList.bind(this);
        this.showModal = this.showModal.bind(this);
        this.getCard = this.getCard.bind(this);
    }
    render() {
        return (
            <div className="component-Content">
                <div className='columns'>
                    {Object.keys(this.state.lists).map((elem) => {
                        const {listID, listTitle} = this.state.lists[elem];
                        return <List title={listTitle}
                                    listID={listID}
                                    cards={this.state.cards}
                                    addCardText={this.addCardToList.bind(this, listID)}
                                    showModal={this.showModal}/>;
                    })}
                    <div className='column'>
                            {(this.state.addNewList === true)
                                ? <NewList   cancelList={this.cancelList} 
                                            addList={this.handleNewList}/> 
                                : <a className='button is-info' onClick={this.displayNewListBox}>Add a List...</a>
                            }
                    </div>
                </div>
                {this.state.isModalActive ? <Modal lists={this.state.lists} card={this.getCard()} /> : null}
            </div>
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
    showModal (e) {
        console.dir(e);
        this.setState({
           isModalActive: true 
        });
    }
    getCard() {
        return this.state.cards['1'];
    }
}

export default Content;