export const initialState = {
    innerModal: false,
}

export const actionTypes = {
    SET_INNER_MODAL: "SET_INNER_MODAL"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_INNER_MODAL:
            return {
                ...state,
                innerModal: action.innerModal
            }

        default: 
            return state;
    }
}

export default reducer;