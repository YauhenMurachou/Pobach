import { Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ChangeEvent, Component, MouseEventHandler } from 'react';

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

  timer = setTimeout(() => {
    this.setState({
      editMode: false,
    });
  }, 200);

  deActiveEditMode = () => this.timer;

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

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { status, isOwner } = this.props;
    return (
      <>
        <div className={styles.subtitle}>{i18n.t('status.status')}</div>
        {!this.state.editMode && (
          <Tooltip
            title={isOwner ? (i18n.t('status.click') as string) : ''}
            arrow
            placement="bottom"
          >
            <span
              onClick={
                isOwner
                  ? (this.activeEditMode as MouseEventHandler<HTMLSpanElement>)
                  : undefined
              }
              role="button"
              className={isOwner ? styles.status : undefined}
            >
              {status ?? '...'}
            </span>
          </Tooltip>
        )}
        {isOwner && (this.state.editMode || !status) && (
          <TextField
            onBlur={this.handleBlurStatus}
            onChange={this.onStatusChange}
            value={this.state.status}
            autoFocus
            variant="standard"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.handleBlurStatus();
              }
            }}
          />
        )}
      </>
    );
  }
}

export default ProfileStatus;
