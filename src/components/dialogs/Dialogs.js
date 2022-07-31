import React from "react"
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import DialogItem from "./dialogItem/DialogItem"
import Message from "./message/Message"
import DialogsForm from "./DialogsForm"
import { addMessageActionCreator } from "../../redux/dialogsPageReducer"

import classes from "./Dialogs.module.css"

const Dialogs = () => {
  const { dialogsData, messageData } = useSelector((state) => state.dialogsPage)
  const { isAuth } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const addNewMessageForm = (values) => {
    dispatch(addMessageActionCreator(values.newMessage))
  }

  const dialogsItemsCopy = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ))

  const messagesItemsCopy = messageData.map((message) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ))

  if (!isAuth) {
    return <Redirect to="/Login" />
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsItemsCopy}</div>
      <div className={classes.messages}>
        <div>{messagesItemsCopy}</div>
        <DialogsForm handleSubmit={addNewMessageForm} />
      </div>
    </div>
  )
}

export default Dialogs
