import React from 'react';
import List from './List';
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
    }
    render() {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                            {Object.keys(this.state.lists).map((elem) => {
                               return <List title={this.state.lists[elem].listTitle}
                                            listID={this.state.lists[elem].listID}
                                            cards={this.state.cards}/>;
                            })}
                        </div>
                    </div>
            </section>
        )
    }
}

export default Content;