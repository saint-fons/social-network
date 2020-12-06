let store = {
    _state: {
        DialogPage: {
            DialogElement: [
                {name: "Alexandra", id: 1, age: 19},
                {name: "Dmitri", id: 2, age: 18},
                {name: "Masha", id: 3, age: 25},
                {name: "Vikaaaa", id: 4, age: 18}
            ],
            MessageElement: [
                {message: "message 1", number: "number"},
                {message: "message 2", number: "number"},
                {message: "message 3", number: "number"},
                {message: "message 7", number: "number"}
            ]
        },
        SettingsPage: {
            SettingsElement: [
                {message: "1111111"},
                {message: "hello there"}
            ],
            addNewSetting: "Vyzyvai Natashu1111"
        },
        ProfilePage: {
            ProfileElement: [
                {names: "Abdul"},
                {names: "Natasha"}
            ],
            AddNewProfile: "lyaaaaa1"
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State was changed")
    },
    addProfile() {
        let newProfile = {
            names: this._state.ProfilePage.AddNewProfile
        }
        this._state.ProfilePage.ProfileElement.push(newProfile)
        this._state.ProfilePage.AddNewProfile = ''
        this._callSubscriber(this._state)
    },
    addSetting() {
        let newSetting = {
            message: this._state.SettingsPage.addNewSetting
        }
        this._state.SettingsPage.SettingsElement.push(newSetting)
        this._state.SettingsPage.addNewSetting = ''
        this._callSubscriber(this._state)
    },
    addNewSettingText(newSetting) {

        this._state.SettingsPage.addNewSetting = newSetting
        this._callSubscriber(this._state)
    },
    addNewProfileText(newProfile) {

        this._state.ProfilePage.AddNewProfile = newProfile
        this._callSubscriber(this._state)
    },
    addPost(){

        let newPost = {
            names: postMessage
        }
        this._state.ProfilePage.ProfileElement.push(newPost)
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

}

window.store = store

export default store