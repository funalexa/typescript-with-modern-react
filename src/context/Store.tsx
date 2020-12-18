import React, {createContext, useReducer} from 'react';
import {IAction, IState} from './interfaces';
import { IEpisode } from '../entities/IEpisode';
import {ADD_FAV, FETCH_DATA, REMOVE_FAV} from './types';

const initialState: IState = {
    episodes: [],
    favourites: []
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: any, action: IAction): IState {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, episodes: action.payload};
        case ADD_FAV:
            return {...state, favourites: [...state.favourites, action.payload]};
        case REMOVE_FAV:
            return {...state, favourites: state.favourites.filter((fav: IEpisode) => fav.id !== action.payload)};
        default:
            return state;

    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>
        {props.children}
    </Store.Provider>
}
