import {applyMiddleware, combineReducers, createStore} from "redux";
import settingsReducer from "./settings-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./dialogs-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    SettingsPage: settingsReducer,
    ProfilePage: profileReducer,
    UsersPage: usersReducer,
    DialogsPage: dialogsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store