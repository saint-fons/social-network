let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {

        default : return state
    }
}


export default dialogsReducer