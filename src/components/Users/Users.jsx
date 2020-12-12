import React from 'react';
import styles from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://bookingagentinfo.com/wp-content/uploads/2018/03/Alicia-Vikander-Contact-Information.jpg",
                    followed: true,
                    fullName: "Dmitry",
                    status: 'iam the boss',
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 2,
                    photoUrl: "https://bookingagentinfo.com/wp-content/uploads/2018/03/Alicia-Vikander-Contact-Information.jpg",
                    followed: false,
                    fullName: "Masha",
                    status: 'iam the boss',
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://bookingagentinfo.com/wp-content/uploads/2018/03/Alicia-Vikander-Contact-Information.jpg",
                    followed: true,
                    fullName: "Vika",
                    status: 'iam the boss',
                    location: {city: "Moscow", country: "Ukraine"}
                }
            ]
        )
    }

    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }
    </div>
}

export default Users;