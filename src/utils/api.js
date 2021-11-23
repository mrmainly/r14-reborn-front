import axios from 'axios';
import cookie from 'js-cookie'

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://backend:8000/'

const api = (url) => {
    const token = cookie.get('jwttoken')
    if (token) {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Authorization': "Token " + token,
                'Content-Type': 'application/json'
            },
        })
        return instance
    } else {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return instance
    }
}

class API {
    getToken({ phone, password }, dispatch, router) {
        api('api/users/login/').post(null, {
            phone: phone,
            password: password
        }).then(res => {
            cookie.set('jwttoken', res.data.token)
            router.push('/profile')
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такокго пользователя не существует' } }) })
    }
    register({ phone, password }, dispatch, router) {
        api('api/users/register/').post(null, {
            phone: phone,
            password: password
        }).then(res => {
            router.push('/auth/Login')
            console.log(res)
            dispatch({ type: 'notification', payload: { text: 'смс был отпрален', status: 'success', active: true } })
        }).catch(() => { dispatch({ type: 'notification', payload: { text: 'вы не правильно заполнили поле телефона или такой пользователь уже существует', status: 'error', active: true } }) })
    }
    async getSurveys(gender, params) {
        let result = await api(`api/surveys/${gender}/?` + params).get(null)
        return result
    }
    async getSurveysMe() {
        let result = await api(`api/users/me/`).get(null)
        return result
    }
    async getSurveyDetail(gender, id) {
        let result = await api(`api/surveys/${gender}/${id}`).get(null)
        return result
    }
    surveyDelete(gender, id) {
        api(`api/surveys/${gender}/${id}`).delete().then(res => {
            window.location.reload()
        }).catch(error => {
            console.log(error)
        })
    }
    deletePhoto(gender, id) {
        api(`api/surveys/${gender}/${id}/photos/delete_photo/`).delete().then(res => {
            window.location.reload()
        }).catch(e => console.log(e))
    }
    setMainPhoto(id, gender) {
        api(`api/surveys/${gender}/${id}/photos/set_main/`).get().then(res => {
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }
    getListDetailPut(gender, id, data) {
        api(`api/surveys/${gender}/${id}`).put(null, {
            ...data
        }).then((res) => {
            console.log(res)
        }).catch(error => {
            throw new Error('error')
        })
    }
    async getBalance() {
        let result = api('api/payment/balance/').get()
        return result
    }
    sendBalance(data) {
        api('api/payment/payment/create').post(null, { ...data }).then((res) => {
            window.location.href = res.data[0]
        }).catch((error) => {
            console.log(error)
        })
    }
    async sendSurveys(gender, router, data, dispatch) {
        Object.keys(data).forEach(el => {
            if (data[el] === '') {
                data[el] = null
            }
        })
        api(`api/surveys/${gender}/`).post(null, { ...data }).then(res => {
            console.log('surveyPostResult', res)
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'анкета создана' } })
            router.push('/profile')
        }).catch(error => {
            console.log(error)
            dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'ошибка в анкете' } })
        })
    }
    changePassword(dispatch, data) {
        api('api/users/change-password/').post(null, { ...data }).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'пароль изменен' } })
        }).catch(e => {
            dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'текущий пароль не правильный' } })
        })
    }
}

export default new API()
