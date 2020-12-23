import React from 'react';
import {IEpisode} from '../entities/IEpisode';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EpisodesList = (props: any): JSX.Element[] => {
    const {episodes, toggleFav, favourites, store} = props;
    const {state, dispatch} = store;

    return episodes.length > 0 ? episodes.map(
        (episode: IEpisode) => {
            return (
                <section key={episode.id} className='episode-box'>
                    <img src={episode.image.medium} alt={`Emily: ${episode.name}`}/>
                    <div> {episode.name} </div>
                    <section style={{display: 'flex', justifyContent: 'space-between' }}>
                        <div> Season: {episode.season} Number: {episode.number} </div>
                        <button type='button' onClick={() => toggleFav(state, dispatch, episode)}>
                            {
                                favourites.includes(episode)
                                    ? <FontAwesomeIcon icon={solidHeart} color='#cc0000'/>
                                    : <FontAwesomeIcon icon={regularHeart} color='#cc0000'/>
                            }
                        </button>
                    </section>
                </section>
            );
        }
    ) : <div> No episodes found! </div>
}

export default EpisodesList;
