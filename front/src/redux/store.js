import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

const reduxDevTools =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevTools);

/*store.subscribe(() => {
   console.log("State ato amin'ny store : ");
   console.log(store.getState());
});*/
