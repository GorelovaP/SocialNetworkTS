import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";

import thunkMiddleware from "redux-thunk"
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reduсer";


export type RootReducerType = typeof reducer
export type reduxStateType = ReturnType<RootReducerType>
export type StoreType = Store<reduxStateType>

let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export let store: StoreType = createStore(reducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store



