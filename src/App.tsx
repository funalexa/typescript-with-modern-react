import './App.css';
import {Store} from './context/Store';
import {IAction} from './context/interfaces';
import React, {Suspense, useContext, useEffect} from 'react';
import {IEpisode} from './entities/IEpisode';
import {ADD_FAV, FETCH_DATA, REMOVE_FAV} from './context/types';

const EpisodesList = React.lazy<any>(() => import('./components/EpisodesList'));

function App(): JSX.Element {
    const {state, dispatch} = useContext(Store);
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=emily+in+paris&embed=episodes'

    useEffect(() => {
        state.episodes.length === 0 && fetchData();
    })

    const fetchData = async () => {
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: FETCH_DATA,
            payload: dataJSON._embedded.episodes
        });
    }

    const toggleFav = (episode: IEpisode): IAction => {
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

    const episodeProps = {
        episodes: state.episodes,
        toggleFav: toggleFav,
        favourites: state.favourites
    }

    return (
        <div className="App">
            <header className='header'>
                <div>
                    <h1> Emily in Paris</h1>
                    <p> Pick your favourite episode! </p>
                </div>
                <div>
                    {(state.favourites.length <= 1)
                        ? (<> favourite: {state.favourites.length} </>)
                        : (<> favourites: {state.favourites.length} </>)}
                </div>
            </header>
            <Suspense fallback={<div> loading... </div>}>
                <section className='episode-layout'>
                    <EpisodesList {...episodeProps}/>
                </section>
            </Suspense>
        </div>
    );
}

export default App;
