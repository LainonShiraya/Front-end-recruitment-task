const loadingReducer = (state = true, action) => {
    switch(action.type) {
        case 'LOADING':
            return action.payload
        default:
         return state;
    }
}

export default loadingReducer;