import React from 'react';

export const defaultStore = {
    noti: {
        status: '',
        text: '',
        active: false
    },
    list: {
        name: 'woman',
    },
    photo: {
        name: '',
        id: '',
        type: '',
    },
    search: {
        mode: '',
        length: ''
    },
    cardsId: {
        id: '',
    },
    slogo: {
        params: '',
    },
    getList: {
        data: []
    }
};


export const StateContext = React.createContext();
export const DispatchContext = React.createContext();