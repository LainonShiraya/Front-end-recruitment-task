const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'NEXT': 
       return state +1;
        default:
            return state;
    }
}
export default pageReducer;


// state = 1 beacuse we do start using page number 1.