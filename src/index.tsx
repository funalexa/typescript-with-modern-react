import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './context/Store';
import Homepage from './components/HomePage';
import FavPage from './components/FavPage';
import { Router, RouteComponentProps } from '@reach/router';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
            <App path='/'>
                <RouterPage pageComponent={<Homepage/>} path='/'/>
                <RouterPage pageComponent={<FavPage/>} path='favs'/>
            </App>
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
