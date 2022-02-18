import React from 'react';

// import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

	state = {
		editMode: false
	}

	activeEditMode() {
		this.setState({
			editMode: true})
	}

	deActiveEditMode() {
		this.setState({
			editMode: false})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
					<span onClick={this.activeEditMode.bind(this)}> {this.props.status} </span>
				</div>}

				{this.state.editMode &&
					<div>
					<input onBlur={this.deActiveEditMode.bind(this)} value={this.props.status} autoFocus={true}/>
				</div>}

			</div>
		)
	}
};

export default ProfileStatus;


