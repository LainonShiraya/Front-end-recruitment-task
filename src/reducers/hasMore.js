const hasMoreReducer = (state = false, action) => {
    switch(action.payload) {
        case true:
            state = action.payload;
            return true;
        case false:
            state = action.payload;
            return false;
        default:
         return true;
    }
}

export default hasMoreReducer;
