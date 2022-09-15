import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFetching,
    unfollow
} from "../../redux/users_reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&?count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            if (response.data.resultCode == 0) {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleFetching();
            }
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetching();
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&?count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleFetching();
        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleFetching,
})(UsersContainer);