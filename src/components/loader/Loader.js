import React from 'react';
import loader from '../../images/loader.gif'

let Loader = (props) => {
	return <>
	<div>{props.isFetching ? <img src={loader} /> : null}</div>
	</>
}

export default Loader;