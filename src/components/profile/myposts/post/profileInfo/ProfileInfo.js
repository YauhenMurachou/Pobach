import React from "react"

import Loader from "../../../../loader/Loader"
import ProfileStatus from "./profilleStatus/ProfileStatus"
import avatar from "../../../../../images/avatar.png"

import classes from "./ProfileInfo.module.css"

const ProfileInfo = ({ profile, sendPhoto, isOwner, status, updateStatus }) => {

  if (!profile) {
    return <Loader />
  }

  let objProp = profile
  let info = Object.getOwnPropertyNames(objProp)

  const loadFile = (e) => {
    if (e.target.files.length) {
      sendPhoto(e.target.files[0])
    }
  }

  return (
    <>
      <div>
        <img alt="photos" src={profile.photos.large || avatar} />
        {isOwner && <input type="file" onChange={loadFile} />}
      </div>

      {info.map((item, index) => {
        if (objProp[item] && typeof objProp[item] !== "object") {
          return (
            <div key={index}>
              {" "}
              {item}: {objProp[item]}{" "}
            </div>
          )
        } else {
          return <div key={index}> {item}: No data </div>
        }
      })}

      <div className={classes.item}>
        <ProfileStatus
          isOwner={isOwner}
          status={status}
          updateStatus={isOwner ? updateStatus : null}
        />
      </div>
    </>
  )
}

export default ProfileInfo
