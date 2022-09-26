import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {ActionTypeDialog, dialogsPageReducer} from "./dialogsPage-reducer";
import {ActionTypeProfilePage, profilePageReducer} from "./profilePage-reducer";

import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {ActionTypeUser, usersReducer} from "./users-reducer";
import {ActionTypeAuth, authReducer} from "./auth-reduсer";
import {reducer as formReducer} from "redux-form";

export type RootReducerType = typeof reducer
export type reduxStateType = ReturnType<RootReducerType>
export type StoreType = Store<reduxStateType>


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer //обязательно form первое название, т к redux-form будет искать form
})
export let store: StoreType = createStore(reducer, applyMiddleware(thunkMiddleware));

export type AppActionsType = ActionTypeProfilePage & ActionTypeDialog & ActionTypeUser & ActionTypeAuth
// @ts-ignore
window.store = store

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType>

