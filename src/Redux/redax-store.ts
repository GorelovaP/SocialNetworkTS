import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {ActionTypeDialog, dialogsPageReducer} from "./dialogsPage-reducer";
import {ActionTypeProfilePage, profilePageReducer} from "./profilePage-reducer";

import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {ActionTypeUser, usersReducer} from "./users-reducer";
import {ActionTypeAuth, authReducer} from "./auth-reduсer";
import {FormAction, reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reduсer";

export type RootReducerType = typeof reducer
export type reduxStateType = ReturnType<RootReducerType>
export type StoreType = Store<reduxStateType>


let reducer = combineReducers({
    app: appReducer,
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer //обязательно form первое название, т к redux-form будет искать form
})
export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//export let store: StoreType = createStore(reducer, applyMiddleware(thunkMiddleware));

export type AppActionsType = ActionTypeProfilePage & ActionTypeDialog & ActionTypeUser & ActionTypeAuth
// @ts-ignore
window.store = store


export type AppDispatch = ThunkDispatch<StoreType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType | FormAction>

