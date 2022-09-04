import React, { useState } from "react"
import { useDispatch } from "react-redux"

import Loader from "../../../../loader/Loader"
import ProfileStatus from "./profilleStatus/ProfileStatus"
import avatar from "../../../../../images/avatar.png"
import { Button } from "@mui/material"
import ProfileInfoEditForm from "./ProfileInfoEditForm"
import { editProfileThunkCreator } from "../../../../../redux/profilePageReducer"

import classes from "./ProfileInfo.module.css"

const ProfileInfo = ({ profile, sendPhoto, isOwner, status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const toggleEditMode = () => setEditMode((prevState) => !prevState)
  const dispatch = useDispatch()

  const handleProfileInfoEdit = (formData) => {
    dispatch(editProfileThunkCreator(formData))
    setEditMode(false)
  }

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
        {isOwner && (
          <div>
            <input type="file" onChange={loadFile} />
          </div>
        )}
      </div>

      <div className={classes.item}>
        <ProfileStatus
          isOwner={isOwner}
          status={status}
          updateStatus={isOwner ? updateStatus : null}
        />
      </div>

      {!editMode &&
        info.map((item, index) => {
          if (objProp[item] && typeof objProp[item] !== "object" && typeof objProp[item] !== "boolean") {
            return (
              <div key={index}>
                {item}: {objProp[item]}
              </div>
            )
          } else if (item === "photos") {
            return <span key={index}></span>
          } else if (item === "lookingForAJob" && objProp.lookingForAJob) {
            return <div> I am looking for a job</div>
          } else if (item === "lookingForAJob" && !objProp.lookingForAJob) {
            return <div> I am NOT looking for a job</div>
          } else {
            return (
              <div key={index}>
                {item}:
                {Object.keys(objProp[item]).map((elem, ind) => {
                  return (
                    <div key={ind}>
                      {elem}: {objProp[item][elem] || "No data"}
                    </div>
                  )
                })}
              </div>
            )
          }
        })}

      {editMode && (
        <ProfileInfoEditForm info={info} profile={profile} onSubmit={handleProfileInfoEdit} />
      )}
      {isOwner && !editMode && (
        <Button variant="contained" onClick={toggleEditMode}>
          Edit info
        </Button>
      )}
    </>
  )
}

export default ProfileInfo
