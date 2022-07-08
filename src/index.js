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
	yield takeEvery('GET_ZOO_ANIMALS', getZooAnimalsSaga);
	yield takeEvery('ADD_ANIMAL_SAGA', addAnimalSaga);
	yield takeEvery('GET_ANIMAL_CLASSES_SAGA', getAnimalClassesSaga);
	yield takeEvery('TRANSFER_ANIMAL_SAGA', transferAnimalSaga);
	yield takeEvery('ADD_CLASS_SAGA', addClassSaga);
}

function* getZooAnimalsSaga() {
	try {
		const zoo = yield axios.get('/zoo');
		yield put({ type: 'SET_ZOO_ANIMALS', payload: zoo.data });
	} catch {
		console.log('getZooAnimalsSaga Generator Error');
	}
}

function* getAnimalClassesSaga() {
	try {
		const classes = yield axios.get('/zoo/classes');
		yield put({ type: 'SET_ANIMAL_CLASSES', payload: classes.data });
	} catch {
		console.log('getAnimalClassesSaga Generator Error');
	}
}

function* addAnimalSaga(action) {
	try {
		yield axios.post('/zoo/add', action.payload);
		yield put({ type: 'GET_ZOO_ANIMALS' });
	} catch {
		console.log('addAnimalSaga Generator Error');
	}
}

function* transferAnimalSaga(action) {
	try {
		yield axios.delete(`/zoo/delete/${action.payload.id}`);
		yield put({ type: 'GET_ZOO_ANIMALS' });
	} catch {
		console.log('transferAnimalSaga Generator Error');
	}
}

function* addClassSaga(action) {
	try {
		yield axios.post('/zoo/classes/add', action.payload);
		yield put({ type: 'GET_ZOO_ANIMALS' });
	} catch {
		console.log('addClassSaga Generator Error');
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
};

const animalClasses = (state = [], action) => {
	switch (action.type) {
		case 'SET_ANIMAL_CLASSES':
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		zooAnimals,
		animalClasses,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById('root')
);
