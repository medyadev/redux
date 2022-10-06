import {createStore, applyMiddleware, combineReducers} from "redux";
import {basketReducer} from "../reducers/basketReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {catalogReducer} from "../reducers/catalogReducer";
import {favoriteReducer} from "../reducers/favoriteReducer";

const reducer = combineReducers({
    catalog: catalogReducer,
    favorite: favoriteReducer,
    basket: basketReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));