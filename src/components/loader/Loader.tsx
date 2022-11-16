import React from "react"
import loader from "../../images/loader.gif"

export type Props = {
  isFetching?: boolean
  // id: number
}

const Loader: React.FC<Props> = ({ isFetching }) => {
  return (
    <>
      <div>{isFetching ? <img src={loader} alt="loader" /> : null}</div>
    </>
  )
}

export default Loader
