import './App.css';
import {Store} from './context/Store';
import {IAction} from './context/interfaces';
import {useContext, useEffect} from 'react';

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
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        });
    }

    const toggleFav = (episode: IEpisode): IAction => {
        const episodeInFavs = state.favourites.includes(episode);
        if (!episodeInFavs) {
            return dispatch({
                type: 'ADD_FAV',
                payload: episode
            });
        } else {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: episode.id
            });
        }

    }

    return (
        <div className="App">
            <header className='header'>
                <h1> Emily in Paris</h1>
                <p> Pick your favourite episode! </p>
            </header>
            <section className='episode-layout'>
                {state.episodes.map(
                    (episode: IEpisode) => {
                        return (
                            <section key={episode.id} className='episode-box'>
                                <img src={episode.image.medium} alt={`Emily: ${episode.name}`}/>
                                <div> {episode.name} </div>
                                <section>
                                    <div> Season: {episode.season} Number: {episode.number} </div>
                                    <button type='button' onClick={() => toggleFav(episode)}>
                                        {
                                            state.favourites.includes(episode) ?
                                                ' Remove heart ' :
                                                ' Give Heart'
                                        }
                                    </button>
                                </section>
                            </section>
                        );
                    }
                )}
            </section>
        </div>
    );
}

export default App;
