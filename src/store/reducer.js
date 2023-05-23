export const defaultState = {
    number: 0
}

// TODO: Implement increment and decrement cases
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state}
        case "DECREMENT":
            return {...state}
        default:
            return {...state}
    }
}

export default reducer
