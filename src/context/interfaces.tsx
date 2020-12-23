import {IEpisode} from '../entities/IEpisode';
import React from 'react';

export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload: Array<IEpisode> | IEpisode
}

export interface IActionNumber {
    type: string,
    payload: number
}
