const initialState = {
    darkMode: localStorage.getItem('UA-portfolio') === null
        ? true : JSON.parse(localStorage.getItem('UA-portfolio')),
    mobileNav: false,
    navScroll: 0
}

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case 'MOBILE_NAV': 
            return {
                ...state,
                mobileNav: !state.mobileNav
            }
        case 'NAV_SCROLL':
            return {
                ...state,
                navScroll: payload
            }
        case 'NAV_RESET':
            return {
                ...state,
                navScroll: 0
            }
        default: 
            return state
    }
}