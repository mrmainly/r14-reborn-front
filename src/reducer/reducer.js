export const stateReducer = (state, action) => {
    switch (action.type) {
        case 'notification':
            return { ...state, noti: action.payload }
        case 'changeList':
            return { ...state, list: action.payload }
        case 'changeList':
            return { ...state, photoName: action.payload }
        case 'photo':
            return { ...state, photo: action.payload }
        case 'sideBarSearch':
            return { ...state, search: action.payload }
        case 'cardsId':
            return { ...state, cardsId: action.payload }
        case 'slogoDispatch':
            return { ...state, slogo: action.payload }
        case 'getList':
            return { ...state, data: action.payload }
        case 'paymentChange':
            return { ...state, open: action.payload }
        case 'changeUserId':
            return { ...state, userId: action.payload }
        default:
            throw new Error();
    }
}