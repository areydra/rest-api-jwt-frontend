import axios from 'axios'

export const login = user => {
    return {
        type: 'LOGIN',
        payload: axios.post('http://localhost:5000/api/auth/login', user)
    }
}

export const postToken = (token, id) => {
    return {
        type : 'POST_TOKEN',
        payload : axios.patch(`https://localhost:5000/api/user/${id}`, token)
    }
}