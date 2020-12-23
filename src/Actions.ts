import {ADD_FAV, FETCH_DATA, REMOVE_FAV} from './context/types';
import {IEpisode} from './entities/IEpisode';
import {IAction, IState} from './context/interfaces';
import {useContext} from 'react';
import {Store} from './context/Store';

const URL = 'https://api.tvmaze.com/singlesearch/shows?q=emily+in+paris&embed=episodes'

export const fetchData = async (dispatch: any) => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: FETCH_DATA,
        payload: dataJSON._embedded.episodes
    });
}

export const toggleFav = (state: IState, dispatch: any, episode: IEpisode): IAction => {
    const episodeInFavs = state.favourites.includes(episode);
    if (!episodeInFavs) {
        return dispatch({
            type: ADD_FAV,
            payload: episode
        });
    } else {
        return dispatch({
            type: REMOVE_FAV,
            payload: episode.id
        });
    }
}
