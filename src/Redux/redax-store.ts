import {combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";
import {ActionType} from "./store";

export type RootState = typeof reducers
export type redaxStateType = ReturnType<RootState>
export type StoreType = Store<redaxStateType, ActionType>

let reducers  = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})
 export let store: StoreType = createStore(reducers);

