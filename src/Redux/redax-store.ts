import {combineReducers, createStore, Store} from "redux";
import {AddNewMessageActionCreator, dialogsPageReducer, SendNewMassageActionCreator} from "./dialogsPage-reducer";
import {AddPostActionCreator, ChangeNewPostActionCreator, profilePageReducer} from "./profilePage-reducer";


export type ActionType =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>


export type RootState = typeof reducers
export type reduxStateType = ReturnType<RootState>
export type StoreType = Store<reduxStateType, ActionType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})
export let store: StoreType = createStore(reducers);




