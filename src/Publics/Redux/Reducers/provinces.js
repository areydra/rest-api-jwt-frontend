export const initialState = {
    provinces : {},
    isLoading : false,
    isRejected : false,
    isFulfilled :false
}

const provinces = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PROVINCES_PENDING':
            return {
                ...state,
                isLoading: true, 
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PROVINCES_REJECTED' :
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PROVINCES_FULFILLED' :
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                provinces: action.payload.data.responses,
            }

        default : 
            return state
    }
}

export default provinces