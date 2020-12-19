import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {getUserProfile} from "../../Redux/profile-reducer";
import connect from 'react-redux/lib/connect/connect';
import { withRouter } from "react-router";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 13375
        }

        this.props.getUserProfile(userId)

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);