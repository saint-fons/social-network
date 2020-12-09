import {combineReducers, createStore} from "redux";
import settingsReducer from "./settings-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    SettingsPage: settingsReducer,
    ProfilePage: profileReducer
})

let store = createStore(reducers)

window.store = store

export default store