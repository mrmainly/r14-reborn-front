const surveyReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return {
                ...state,
                [action.field]: action.payload,
            };
        case 'check':
            return {
                ...state,
                [action.field]: !state[action.field]
            }
    }
}



export default surveyReducer;