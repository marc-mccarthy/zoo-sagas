import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// Import axios
import axios from 'axios';

// Your saga should listen for the action type of `GET_ZOO_ANIMALS`
function* rootSaga() {
    // YOUR CODE HERE
    yield takeEvery( 'GET_ZOO_ANIMALS', getZooAnimalsSaga )
}

function* getZooAnimalsSaga(action) {
    try {
        const zoo = yield axios.get( '/zoo' );
        console.log(zoo.data)
        yield put({ type: 'SET_ZOO_ANIMALS', payload: zoo.data });
    } catch {
        console.log('getZooAnimalsSaga Generator Rrror')
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store class and number of unique animals in that class
const zooAnimals = (state = [], action) => {
    switch (action.type) {
        case 'SET_ZOO_ANIMALS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        zooAnimals,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
