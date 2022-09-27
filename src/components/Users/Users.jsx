import Css from "./Users.module.css"
import userPhoto from "../../assets/images/user-png.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let toggleFollow = (callback, e) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {
            withCredentials: true,
        }).then(response => {
            if (response.data.resultCode == 0) {
                props[callback](e.id)
            }
        });
    }

    return <div>
        <div>
            {pages.map(elem => <span onClick={(e) => { props.onPageChanged(elem) }} className={props.currentPage === elem && Css.selectedPage}>{elem}</span>)}
        </div>
        {
            props.users.map(e =>
                <div key={e.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${e.id}`}>
                                    <img className={Css.photo} src={e.photos.small ? e.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    e.followed
                                        ? <button onClick={() => toggleFollow('unfollow', e)}>Unfollow</button>
                                        : <button onClick={() => toggleFollow('follow', e)}>Follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>
                                    {e.name}
                                </div>
                                <div>
                                    {e.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {"e.location.country"}
                                </div>
                                <div>
                                    {"e.location.city"}
                                </div>
                            </span>
                        </span>
                </div>)
        }
    </div>
}

export default Users;