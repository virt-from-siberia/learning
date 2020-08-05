import React from "react";
import classes from "./Users.module.css";
import Loader from "../Loader/Loader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {AXIOS_API} from "../../api/api";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    console.log(props.followingInProgress);

    return (
        <div>
            <div>
                {pages.map((el) => (
                    <span
                        className={props.currentPage === el && classes.selectedPage}
                        onClick={() => props.onPageChanged(el)}
                    >
            {el}
          </span>
                ))}
            </div>
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                      src={
                          u.photos.small && <Loader/> && u.photos.small !== null
                              ? u.photos.small
                              : "https://info-pravo.by/images/Lectors/person-icon-large.png"
                      }
                      alt=''
                      style={{width: "80px"}}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                    <button
                        onClick={() => props.unfollow(u.id)}
                        disabled={props.isFetching || props.followingInProgress.some(id => id === u.id)}
                    >
                        follow
                    </button>
                ) : (
                    <button
                        onClick={() => props.follow(u.id)}
                        disabled={props.isFetching || props.followingInProgress.some(id => id === u.id)}
                    >
                        unollow
                    </button>
                )}
              </div>
            </span>
                        <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
