import { createStore,compose, applyMiddleware  } from  'redux'

import rootreducer from './reducers/rootreducers'

import  thunk from 'redux-thunk'

const midelware = [thunk]



const store = createStore(rootreducer,compose(
    applyMiddleware(...midelware),
    
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
     ? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    
    ))




export default store