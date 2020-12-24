import React from 'react'
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import connect from 'react-redux/lib/connect/connect';
import {Redirect, withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 13375
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status
})


export default compose(connect(mapStateToProps, {getStatus, getUserProfile, updateStatus}),
    withRouter)
(ProfileContainer)
