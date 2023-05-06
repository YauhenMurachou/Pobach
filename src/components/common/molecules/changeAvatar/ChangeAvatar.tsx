import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import { Button, Popover } from '@mui/material';

import classes from './ChangeAvatar.module.css';

type Props = {
  sendPhoto: (file: string | Blob) => void;
  isAvatar: boolean;
};

const ChangeAvatar: FC<Props> = ({ sendPhoto, isAvatar }) => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = (
    event: MouseEvent<HTMLLabelElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const loadAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      sendPhoto(e.target.files[0]);
    }
  };

  const deleteAvatar = () => {
    sendPhoto('delete');
  };

  return (
    <div className={classes.changeAvatar}>
      <Button
        variant="contained"
        component="label"
        startIcon={<EditIcon />}
        onClick={handleOpen}
      >
        {t('avatar.change')}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={classes.popoverWrapper}>
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadIcon />}
          >
            {t('avatar.new')}
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={loadAvatar}
            />
          </Button>
          <Button
            variant="contained"
            component="label"
            startIcon={<DeleteIcon />}
            onClick={deleteAvatar}
            disabled={!isAvatar}
          >
            {t('avatar.delete')}
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default ChangeAvatar;
