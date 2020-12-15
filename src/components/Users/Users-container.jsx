import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from '../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from './../../assets/imgs/Eclipse.gif'
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.TOGGLE_IS_FETCHING(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.TOGGLE_IS_FETCHING(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.TOGGLE_IS_FETCHING(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.TOGGLE_IS_FETCHING(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
        TOGGLE_IS_FETCHING: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);