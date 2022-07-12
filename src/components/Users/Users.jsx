import React from "react";
import Css from "./Users.module.css"

const Users = (props) => {

    if (props.usersPage.users.length == 0) {
        props.setUsers({
                id: 1,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
                followed: true,
                fullName: 'Sergey',
                status: 'I am a programmer',
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
            },
            {
                id: 2,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
                followed: false,
                fullName: 'Egor',
                status: 'I am a engineer',
                location: {
                    city: 'Gomel',
                    country: 'Belarus',
                },
            });
    }

    return (
        <div>
            Users will be here
            {
                props.usersPage.users.map(e =>
                    <div key={e.id}>
                        <span>
                            <div>
                                <img className={Css.photo} src={e.photoUrl}/>
                            </div>
                            <div>
                                {
                                    e.followed
                                        ? <button onClick={() => props.unfollow(e.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(e.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {e.fullName}
                                </div>
                                <div>
                                    {e.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {e.location.country}
                                </div>
                                <div>
                                    {e.location.city}
                                </div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
}

export default Users;