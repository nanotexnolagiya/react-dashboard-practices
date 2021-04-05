import { applyMiddleware, compose, createStore } from 'redux';

import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
