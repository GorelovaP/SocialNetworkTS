import {combineReducers, createStore, Store} from "redux";
import {AddNewMessageActionCreator, dialogsPageReducer, SendNewMassageActionCreator} from "./dialogsPage-reducer";
import {AddPostActionCreator, ChangeNewPostActionCreator, profilePageReducer} from "./profilePage-reducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";


export type ActionType =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


export type RootState = typeof reducers
export type reduxStateType = ReturnType<RootState>
export type StoreType = Store<reduxStateType, ActionType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer
})
export let store: StoreType = createStore(reducers);




