import { combineReducers } from 'redux';

import { resultatReducer } from './resultatReducer';

export const reducer = combineReducers({
   resultat: resultatReducer,
});
