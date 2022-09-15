import React from "react";
import Css from "./Profile.module.css"
import Preloader from "../../common/Preloader/Preloader";

const Profile = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large} alt={'background'}/>
            </div>
            <div className={Css.descriptionBlock}>
                <img src={props.profile.photos.small} />
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    )
}

export default Profile