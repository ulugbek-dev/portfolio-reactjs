const initialState = (
    localStorage.getItem('UA-portfolio') === null ? (
        {
            darkMode: false,
            animations: {
                home: 0,
                about: 0
            }
        }
    ) : (
        JSON.parse(localStorage.getItem('UA-portfolio'))
    )
)

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