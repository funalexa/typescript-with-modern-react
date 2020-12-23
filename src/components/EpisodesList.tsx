import React from 'react';
import {IEpisode} from '../entities/IEpisode';

const EpisodesList = (props: any): JSX.Element[] => {
    const {episodes, toggleFav, favourites} = props;

    return episodes.map(
        (episode: IEpisode) => {
            return (
                <section key={episode.id} className='episode-box'>
                    <img src={episode.image.medium} alt={`Emily: ${episode.name}`}/>
                    <div> {episode.name} </div>
                    <section style={{display: 'flex', justifyContent: 'space-between' }}>
                        <div> Season: {episode.season} Number: {episode.number} </div>
                        <button type='button' onClick={() => toggleFav(episode)}>
                            {
                                favourites.includes(episode)
                                    ? ' Remove heart '
                                    : ' Give Heart'
                            }
                        </button>
                    </section>
                </section>
            );
        }
    )
}

export default EpisodesList;
