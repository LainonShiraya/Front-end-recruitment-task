const ZoomReducer = (state = [], action) => {
    switch(action.type) {
        case 'SHOW': 
       return[
            `https://picsum.photos/id/${action.payload}/1200/800`,
            'Show'
            ]
           ;
        case 'HIDE': 
        return[
            `https://picsum.photos/id/${action.payload}/1200/800`,
             'Hide'
             ]
            ;
        default:
            return false;
    }
}
export default ZoomReducer;
