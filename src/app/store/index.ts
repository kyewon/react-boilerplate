import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState, rootReducer } from 'app/reducers';
import { logger } from 'app/middleware';
import createSagaMiddleware from 'redux-saga'
// import rootSaga from '../sagas/index'
import rootSaga from '../sagas/api/sagas'
// import reducers from '../sagas/api/reducers'

export function configureStore(initialState?: RootState): Store<RootState> {
  // let middleware = applyMiddleware(thunk, logger);
  const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(sagaMiddleware, logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;
  sagaMiddleware.run(rootSaga)
  
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
