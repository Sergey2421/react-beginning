import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/main_reducer";
import {useLocation, useParams} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) userId = 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }


    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.mainPage.profile,
    }
}


export default connect(mapStateToProps, {
    setUserProfile,
})(withRouter(ProfileContainer));
