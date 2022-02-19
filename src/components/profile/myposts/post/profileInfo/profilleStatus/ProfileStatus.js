import React from 'react';

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status	
	}	

	activeEditMode() {
		this.setState({
			editMode: true
		})
	}

	deActiveEditMode() {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		this.setState({status: e.currentTarget.value})
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.status !== this.props.status) {
			this.setState({status: this.props.status})
		}
	}

	render() {

		return (
			<div>
				<div> Status: </div>

				{!this.state.editMode &&
					<div>
						<span onClick={this.activeEditMode.bind(this)}> {this.props.status} </span>
					</div>}

				{(this.state.editMode || !this.props.status) &&
					<div>
						<input onBlur={this.deActiveEditMode.bind(this)}
							onChange={this.onStatusChange}
							value={this.state.status}
							autoFocus={true} />
					</div>}
			</div>
		)
	}
};

export default ProfileStatus;


