import * as axios from 'axios'


const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

export const authAPI = {
    async createRequestToken() {
        try {
            const {data} = await instance.get(`/authentication/token/new?${API_KEY}`)
            console.log(data)
            return data
        } catch (e) {
            console.error('Create Request Token error : ', e)
        }
    },
    async createSession() {
    }
}