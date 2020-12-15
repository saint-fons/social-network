import {combineReducers, createStore} from "redux";
import settingsReducer from "./settings-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    SettingsPage: settingsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
})

let store = createStore(reducers)

window.store = store

export default store