import React, { ChangeEvent, MouseEventHandler } from 'react';
import TextField from '@mui/material/TextField';

import styles from './ProfileStatus.module.css';

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
    const { status, updateStatus } = this.props;
    this.setState({
      editMode: false,
    });
    if (updateStatus && this.state.status.trim() !== status) {
      updateStatus(this.state.status.trim());
    }
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    this.setState({ status: currentTarget.value });
  };

  componentDidUpdate(prevProps: { status: string }) {
    const { status } = this.props;
    if (prevProps.status !== status) {
      this.setState({ status });
    }
  }

  render() {
    const { status, isOwner } = this.props;
    return (
      <>
        {status && (
          <>
            <div className={styles.subtitle}>status</div>
            {!this.state.editMode && (
              <span
                onClick={
                  isOwner
                    ? (this
                        .activeEditMode as MouseEventHandler<HTMLSpanElement>)
                    : undefined
                }
                role="button"
                className={isOwner ? styles.status : undefined}
              >
                {status}
              </span>
            )}
            {isOwner && (this.state.editMode || !status) && (
              <TextField
                onBlur={this.deActiveEditMode}
                onChange={this.onStatusChange}
                value={this.state.status}
                autoFocus
                variant="standard"
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default ProfileStatus;
