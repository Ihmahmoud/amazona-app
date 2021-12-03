// import data from "./data";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import thunk from 'redux-thunk'
import { productListReducer } from "./reducers/productReducers";
const initialState = {};
// const reducer = (state, action) => {
//     return { products: data.products };
// };
const reducer = combineReducers({
    productList: productListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    // compose(applyMiddleware(thunk))
    composeEnhancer(applyMiddleware(thunk))
);

export default store;