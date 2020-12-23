import React, {Fragment, Suspense, useContext} from 'react';
import Loading from './Loading';
import {Store} from '../context/Store';
import {toggleFav} from '../Actions';
import {IEpisodeProps} from '../entities/IEpisode';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));


const FavPage = () => {
    const {state, dispatch} = useContext(Store);

    const episodeProps: IEpisodeProps = {
        episodes: state.favourites,
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

export default FavPage;
