const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
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
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export default usersReducer;