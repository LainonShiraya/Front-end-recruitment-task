export const setLoading = (value) => {
    return{
        type: 'LOADING',
        payload:value
    };
}

export const setHasMore = (value) => {
    return{
        type: 'MORE',
        payload: value
    };
}

export const setImages = (value) => {
    return{
        type:'DISPLAY',
        payload: value
    };
}

export const setPage = () => {
    return{
        type:'NEXT'
    };
}

export const show = (value) => {
    return{
        type:'SHOW',
        payload:value
    };
}
export const hide = () => {
    return{
        type:'HIDE'
    };
}