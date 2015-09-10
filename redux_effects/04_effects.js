// so we show how to put async into components and action creators
// what's left is reducers

// Shouldn't be reducers be pure?
// We have been there with original flux and it was not good idea
// to make async stuff in stores.
// Is it even good idea?


// Warning this is not part of redux and it's not released
// https://github.com/matystl/redux-effect-reducers


// so lets imagine that we change type of reducers from
// (state, action) -> newState
// to
// (state, action) -> newState | newState AND Effects



// What should effects be? Anything that is pure and can be parsed
// by middlewares.



// This will be our effect. Note we don't dispatch that this ajax started
function loadUser(dispatch) {
  ajax('url_to_load_user')
  .then((user) => dispatch({
    type: LOGIN_SUCCESSFULL,
     user
  }))
  .catch((error) => dispatch({
    type: LOGIN_FAILED,
    error
    }))
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case LOGIN_USER:
      new_state = ... // set state of user to loading
      // ! NOTICE that i don’t run loadUser function just passing it as effect
      return withSideEffect(newState, loadUser)
    case LOGIN_SUCCESSFULL:
      new_state = ... // set state of user to logged
      return new_state;
    case LOGIN_FAILED:
      ...
  }
}

// How can we make this work with redux?

import {combineReducersWithEffects, enableEffects} from 'redux-effect-reducers';

// Wrap applyMiddleware with  enableEffects
 const createStoreWithMiddleware =
   enableEffects(applyMiddleware)(thunk)(createStore);

// And use combineReducersWithEffects instead of combineReducers

const reducer = combineReducersWithEffects(reducers);


// Maybe talk about other examples of usefull effects


// Advantages?
// Disadvantages?
// Shoud we combine this aproaches?
// If yes when to use which?


// Elm architecture which was inspiration to this
// https://github.com/evancz/elm-architecture-tutorial
