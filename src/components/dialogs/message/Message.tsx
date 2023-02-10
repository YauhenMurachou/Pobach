import React from "react"

import classes from "./Message.module.css"

type Props = {
  message: string
  id: number
}

const Message: React.FC<Props> = ({ message }) => <div className={classes.message}>{message}</div>

export default Message
