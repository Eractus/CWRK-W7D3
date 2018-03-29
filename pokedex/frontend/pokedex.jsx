import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from './reducers/entities_reducer';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.combineReducers = combineReducers;
  window.fetchAllPokemon = fetchAllPokemon;
  const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon));
  fetchAllPokemon().then(getSuccess);
  ReactDOM.render(<h1>{"Pokemon: Gotta Catch 'em All!"}</h1>, root);
});
