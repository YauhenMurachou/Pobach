import React from "react"
import { NavLink } from "react-router-dom"

import classes from "./DialogItem.module.css"

type Props = {
  name: string
  id: number
}

const DialogItem: React.FC<Props> = ({ name, id }) => (
    <div className={classes.dialog}>
      <NavLink to={"/Dialogs/" + id} activeClassName={classes.activeLink}>
        {name}
      </NavLink>
    </div>
  )

export default DialogItem
