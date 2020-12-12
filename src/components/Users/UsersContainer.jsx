import React from "react";
import {connect} from "react-redux";
import {
    followAC, followSuccess, getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingProgress,
    unFollowAC, unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.followSuccess}
                       unfollow={this.props.unfollowSuccess}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


let compotic = compose(
    connect(mapStateToProps,{
        followSuccess: followSuccess,
        unfollowSuccess: unfollowSuccess,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsersThunkCreator: getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)

export default compotic;

