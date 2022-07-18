import React, { memo } from "react"

import MypostsContainer from "./myposts/MypostsContainer"
import ProfileInfo from "./myposts/post/profileInfo/ProfileInfo"

import classes from "./Profile.module.css"

const Profile = memo((props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        isOwner={props.isOwner}
        updateStatus={props.updateStatus}
        sendPhoto={props.sendPhoto}
      />
      <MypostsContainer />
    </div>
  )
})

export default Profile
