import React, {Fragment, Suspense, useContext, useEffect} from 'react';
import {Store} from '../context/Store';
import {IEpisodeProps} from '../entities/IEpisode';
import {fetchData, toggleFav} from '../Actions';
import Loading from './Loading';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const HomePage = (): JSX.Element => {

    const {state, dispatch} = useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchData(dispatch);
    })

    const episodeProps: IEpisodeProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        toggleFav,
        favourites: state.favourites
    }

    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
                <section className='episode-layout'>
                    <EpisodesList {...episodeProps}/>
                </section>
            </Suspense>
        </Fragment>
    );
}

export default HomePage;
