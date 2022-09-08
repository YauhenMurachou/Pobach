import React from "react"

import classes from "./Message.module.css"

export type Props = {
  message: string
  id: number
}

const Message: React.FC<Props> = ({ message }) => {
  return <div className={classes.message}>{message}</div>
}

export default Message
