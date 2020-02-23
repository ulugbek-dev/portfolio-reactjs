const initialState = {
    darkMode: false
}

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default: 
            return state
    }
}