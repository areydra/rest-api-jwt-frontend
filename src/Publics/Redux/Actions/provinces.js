import axios from 'axios'

export const getProvinces = token => {
    return {
        type : 'GET_PROVINCES',
        payload : axios.get('http://localhost:5000/api/provinces', {
            headers : {
                'x-auth-token' : token
            }
        })
    }
}