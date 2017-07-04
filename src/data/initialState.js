import uuid from 'uuid/v1';

const LIST_IDS = {
    a: uuid(),
    b: uuid(),
    c: uuid()
}

const CARD_IDS = {
    a: uuid(),
    b: uuid(),
    c: uuid(),
    d: uuid()
}

export const lists = {
    [LIST_IDS.a]: { listID: LIST_IDS.a, listTitle: 'To Do' },
    [LIST_IDS.b]: { listID: LIST_IDS.b, listTitle: 'In Progress' },
    [LIST_IDS.c]: { listID: LIST_IDS.c, listTitle: 'Done' }
}

export const cards = {
    [CARD_IDS.a]: {
        cardID: '1', cardTitle: 'Make new Trello', listID: LIST_IDS.a,
        comments: { '1': 'Brilliant', '2': 'Lovin\' it' }
    },
    [CARD_IDS.b]: {
        cardID: CARD_IDS.b, cardTitle: 'Make pretty', listID: LIST_IDS.a,
        comments: { '1': 'Rubbish', '2': 'OK' }
    },
    [CARD_IDS.c]: {
        cardID: CARD_IDS.c, cardTitle: 'Initial Layout', listID: LIST_IDS.c,
        comments: { '1': 'All done', '2': 'Took a while' }
    },
    [CARD_IDS.d]: {
        cardID: CARD_IDS.d, cardTitle: 'Implement Functionality', listID: LIST_IDS.b,
        comments: { '1': 'Tired now', '2': 'Bit bored' }
    }
}