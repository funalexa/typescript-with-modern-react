import './App.css';
import {Store} from './context/Store';
import React, {useContext} from 'react';
import {Link} from '@reach/router';


function App(props: any): JSX.Element {
    const {state} = useContext(Store);

    return (
        <div className="App">
            <header className='header'>
                <div>
                    <h1> Emily in Paris</h1>
                    <p> Pick your favourite episode! </p>
                </div>
                <div>
                    <Link to='/'> Home </Link>
                    |
                    <Link to='favs'>
                        {(state.favourites.length <= 1)
                            ? (<> favourite: {state.favourites.length} </>)
                            : (<> favourites: {state.favourites.length} </>)}
                    </Link>
                </div>
            </header>
            {props.children}
        </div>
    );
}

export default App;
