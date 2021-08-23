const displayReducer = (state = [], action) => {
    switch(action.type) {
        case 'DISPLAY': 
       return[
           ...new Set([...state, ...action.payload])]
           ; 
        default:
            return state;
    }
}
export default displayReducer;
