import axios from 'axios';
import cookie from 'js-cookie'

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://backend:8000/'


const api = (url) => {
    const token = cookie.get('jwttoken')
    if (token) {
        const instance = axios.create({
            baseURL: testURL + url,
            headers: {
                'Authorization': "Token " + token,
                'Content-Type': 'application/json'
            },
        })
        return instance
    } else {
        const instance = axios.create({
            baseURL: testURL + url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return instance
    }
}

class API {
    getToken({ phone, password }, dispatch, router) {
        const headers = this.getHeaders()
        api('api/users/login/').post(null, {
            phone: phone,
            password: password
        }, { headers }).then(res => {
            cookie.set('jwttoken', res.data.token)
            router.push('/profile')
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такокго пользователя не существует' } }) })
    }
    register({ phone, password }, dispatch, router) {
        const headers = this.getHeaders()
        api('api/users/register/').post(null, {
            phone: phone,
            password: password
        }, { headers }).then(res => {
            router.push('/auth/Login')
            dispatch({ type: 'notification', payload: { text: 'смс был отпрален', status: 'success', active: true } })
        }).catch(() => { dispatch({ type: 'notification', payload: { text: 'вы не правильно заполнили поле телефона или такой пользователь уже существует', status: 'error', active: true } }) })
    }
    async getList() {
        let result = await api('api/surveys/woman/').get(null)
        return result
    }
}

export default new API()
