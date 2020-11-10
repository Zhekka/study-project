const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         photoUrl: 'https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png',
    //         followed: true,
    //         fullName: 'Dmitry',
    //         status: 'Im a boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png',
    //         followed: false,
    //         fullName: 'Zhenya',
    //         status: 'Happy now',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl:'https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png',
    //         followed: false,
    //         fullName: 'Petro',
    //         status: 'This is me!',
    //         location: {city: 'New York', country: 'USA'}
    //     },
    //     {
    //         id: 4,
    //         photoUrl:'https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png',
    //         followed: false,
    //         fullName: 'Bill',
    //         status: 'i have never seen this car before!',
    //         location: {city: 'Vinnitsa', country: 'Ukraine'}
    //     },
    //     {
    //         id: 5,
    //         photoUrl:'https://img2.pngio.com/avatar-ninja-samurai-warrior-icon-ninja-avatar-png-512_512.png',
    //         followed: true,
    //         fullName: 'Alex',
    //         status: 'This is my first job',
    //         location: {city: 'Krakow', country: 'Poland'}
    //     },
    //
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT,totalUsersCount})


export default usersReducer;