import React, { ChangeEvent, MouseEventHandler } from 'react';

type Props = {
  status: string;
  updateStatus?: (status: string) => void;
  isOwner: boolean;
};

class ProfileStatus extends React.Component<Props> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus && this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    this.setState({ status: currentTarget.value });
  };

  componentDidUpdate(prevProps: { status: string }) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        <div> Status: </div>

        {!this.state.editMode && (
          <div>
            <span
              onClick={
                this.props.isOwner
                  ? (this.activeEditMode as MouseEventHandler<HTMLSpanElement>)
                  : undefined
              }
              role="button"
            >
              {' '}
              {this.props.status}{' '}
            </span>
          </div>
        )}

        {this.props.isOwner && (this.state.editMode || !this.props.status) && (
          <div>
            <input
              onBlur={this.deActiveEditMode}
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
