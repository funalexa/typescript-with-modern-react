import {IEpisode} from '../entities/IEpisode';

export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload: number
}
