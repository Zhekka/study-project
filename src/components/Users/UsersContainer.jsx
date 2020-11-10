import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                //console.log(response.data.items)// response data
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)

            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // console.log(response.data.items)// response data
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   isFetching={this.props.isFetching}/>
                   </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setIsFetchingAC:(isFetching)=>{
//             dispatch(setIsFetchingAC(isFetching));
//         }
//
//     }
// } //or

export default connect(mapStateToProps, {
    follow:followAC,
    unfollow:unFollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUsersCount:setUsersTotalCountAC,
    setIsFetching:setIsFetchingAC
})(UsersContainer)