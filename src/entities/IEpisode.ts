import {Dispatch, IAction, IState} from '../context/interfaces';

export interface IEpisode {
    id: number,
    name: string,
    season: number,
    number: number,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: { medium: string, original: string },
    summary: string,
    url: string
}

export interface IEpisodeProps {
    episodes: IEpisode[],
    store: {state: IState, dispatch: Dispatch},
    toggleFav: (state: IState, dispatch: any, episode: IEpisode) => IAction,
    favourites: Array<IEpisode>
}

