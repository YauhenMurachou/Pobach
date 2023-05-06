import { ChangeEvent, Component, MouseEventHandler } from 'react';
import TextField from '@mui/material/TextField';
import i18n from 'src/i18n';

import styles from './ProfileStatus.module.css';

type Props = {
  status: string;
  updateStatus?: (status: string) => void;
  isOwner: boolean;
};

class ProfileStatus extends Component<Props> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActiveEditMode = () =>
    setTimeout(() => {
      this.setState({
        editMode: false,
      });
    }, 200);

  handleBlurStatus = () => {
    const { status, updateStatus } = this.props;

    if (updateStatus && this.state.status.trim() !== status) {
      updateStatus(this.state.status.trim());
      this.deActiveEditMode();
    } else {
      this.setState({
        editMode: false,
      });
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
            <div className={styles.subtitle}>{i18n.t('status.status')}</div>
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
                onBlur={this.handleBlurStatus}
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
