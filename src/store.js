import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  summary: {}
}

function rootReducer(state = initialState, action) {

  switch (action.type) {

    case 'UPDATE_SUMMARY': {
      return {
        ...state, summary: action.payload
      }
    }
    default:
      return state
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store
