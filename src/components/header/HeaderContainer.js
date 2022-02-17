import React from 'react';
import { connect } from 'react-redux';

import './Header.css';

import Header from './Header';
import { setUserDataThunkCreator } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.setAuthUserData()
	}

	render() {
		return <>
			<Header {...this.props} />
		</>
	}
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData: setUserDataThunkCreator })(HeaderContainer);