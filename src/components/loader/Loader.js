import React from 'react';
import loader from '../../images/loader.gif'

const Loader = (props) => {
	return <>
	<div>{props.isFetching ? <img src={loader} alt='loader'/> : null}</div>
	</>
}

export default Loader;