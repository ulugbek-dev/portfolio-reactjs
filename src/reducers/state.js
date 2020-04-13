const initialState = (
    localStorage.getItem('UA-portfolio') === null ? (
        {}
    ) : (
        JSON.parse(localStorage.getItem('UA-portfolio'))
    )
)

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'APP_ANIMATION':
            return {
                ...state,
                animation: !state.animation
            }
        case 'DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default: 
            return state
    }
}