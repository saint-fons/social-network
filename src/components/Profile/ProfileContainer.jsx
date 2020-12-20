import React from 'react'
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profile-reducer";
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

    }

    render() {


        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})


export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect)
(ProfileContainer)
