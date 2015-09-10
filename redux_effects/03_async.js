// Async events

// How async fit into redux architecture?
// Where should code for async things go?







// Async actions are in their esence multiple dispatch-es
// We can put them inside components
// lets demostrate it on ajax request's

@connect(...)
class Component extends Component {
  onClick(someData) {
    let {dispatch} = this.props;
    this.props.dispatch({type: START_OF_AJAX})
    ajax(some_url, someData)
    .than((data) => dispatch({
      type: END_OF_AJAX_SUCC,
      data: data,
    }))
    .catch((e) => {
      type: END_OF_AJAX_FAIL,
      error: e
    })
  }
  render() {
    ...
  }
}
// this will work but feel wrong
// components are abstraction for view layer not for async things



//we can clean it little by making action creators get dispatch from connect

function loadUserFactory(dispatch) {
  return (someData) => {
    dispatch({type: START_OF_AJAX})
    ajax(some_url, someData)
    .than((data) => dispatch({
      type: END_OF_AJAX_SUCC,
      data: data,
    }))
    .catch((e) => {
      type: END_OF_AJAX_FAIL,
      error: e
    })
  }
}

// and now in connect put dispatch to it
@connect(
  state => ...,
  dispatch => ({
    loadUser: loadUserFactory(dispatch)
  })
)


// looks better
// now lets recole picture for redux architecture

//    -------------   action   -----------  state, action  ------------
//    |middlewares| ---------> |The store| ------------->  | reducers |
//    -------------            ----------- <------------   ------------
//         ^                        |        new state
//         | action |               |
//         | something for          | new state
//         | middleware            \/
//    ----------------           ------------
//    |action creator| <-------- |   view   |
//    ----------------           ------------
//         ^
//         |
//    ----------------
//    | Other inputs |
//    ----------------

// Up to now i didn't tell you lot about middlewares
// they can intercept result of action creators and
// make dispatch at any time

// So they can decide to not pass action to store
// or shedule dispatch at any time


// Redux-thunk https://github.com/gaearon/redux-thunk
// intercept function returned from action creators
// and injext to them dispatch and getState to them

function loadUserFactory(someData) {
  return (dispatch, getState) => {
    dispatch({type: START_OF_AJAX})
    ajax(some_url, someData)
    .than((data) => dispatch({
      type: END_OF_AJAX_SUCC,
      data: data,
    }))
    .catch((e) => {
      type: END_OF_AJAX_FAIL,
      error: e
    })
  }
}

// to enable middlewares we have to wrap create store into them
const finalCreateStore = applyMiddleware(thunk)(createStore);

// now this can be dispatched without problem
store.dispatch(loadUserFactory(someData))


// thunk middleware is pretty general one
// we can make more specific ones
{
  type: AJAX,
  url: ""
  before_action: "START_OF_AJAX",
  after_success: "END_OF_AJAX_SUCC",
  after_error: "END_OF_AJAX_FAIL",
}
// what this brings us
// now side effect it action creator
// test without mocking
// we don't need to care about caching (middleware can do it for us)
// see https://github.com/ashaffer/redux-effects for some implemetation





// What is nice with async in action creators?
// What is not so nice with async action creators?


// combine multiple request to make abstraction :-)
function loadDataForUser(user) {
  return dispatch => {
    dispat(...start loading)
    ajax(load what user has permision to see)
    .then((permitedResources){
      Promise.all(permitedResources.map(resource => ajax(resource))
      .then(results => dispatch(results))
    })
  }
}
// we make multiple ajaxes but only two dispatch so we put complexity inside
// action creator instead of reducer



// need to reason about async things before action hit reducers :-(

function logUser(email, pwd) {
  return (dispatch, getState) {
    dispatch(//signal that i am logging user)
    ajax(//make ajax for logging user)
    .then((user) {
      dispatch(user);
      // now we should check what widget are visible and make request for loading data for them
      // because they can't do it for themself
      const state = getState();
      tryLoadDataForWidget1(state);
      tryLoadDataForWidget2(state);
      tryLoadDataForWidget3(state);
    })
  }
}
