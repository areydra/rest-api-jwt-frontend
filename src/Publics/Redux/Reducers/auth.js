export const initialState = {
    user : {},
    data : [],
    isLoading : false,
    isRejected : false,
    isFulfilled :false
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true, 
                isRejected: false,
                isFulfilled: false
            }
        case 'LOGIN_REJECTED' :
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGIN_FULFILLED' :
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                user: action.payload.data.responses,
            }

        case 'POST_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true, 
                isRejected: false,
                isFulfilled: false
            }
        case 'POST_TOKEN_REJECTED' :
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'POST_TOKEN_FULFILLED' :
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                user: action.payload.data.responses,
            }

        default : 
            return state
    }
}

export default auth