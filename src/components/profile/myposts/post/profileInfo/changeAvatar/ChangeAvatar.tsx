import React, { useState, MouseEvent } from 'react';

import { Button, Popover } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';

import classes from './ChangeAvatar.module.css';

export type Props = {
  sendPhoto: (file: string | Blob) => void;
};

const ChangeAvatar: React.FC<Props> = ({ sendPhoto }) => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const handleClick = (
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

  const loadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      sendPhoto(e.target.files[0]);
    }
  };

  const deleteAvatar = () => {
    sendPhoto('delete');
  };

  return (
    <>
      <div className={classes.changeAvatar}>
        <Button
          variant="contained"
          component="label"
          startIcon={<EditIcon />}
          onClick={handleClick}
        >
          Изменить аватарку
        </Button>
      </div>
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
            Загрузить новую
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
          >
            Удалить
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default ChangeAvatar;
