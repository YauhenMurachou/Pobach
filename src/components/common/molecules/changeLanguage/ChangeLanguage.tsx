import { FC, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Popover } from '@mui/material';

import classes from './ChangeLanguage.module.css';
import styles from 'src/components/common/molecules/changeAvatar/ChangeAvatar.module.css';

const ChangeLanguage: FC = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <>
      <span onClick={handleOpen} role="button" className={classes.language}>
        <LanguageIcon />
      </span>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={styles.popoverWrapper}>
          <Button
            variant="contained"
            component="label"
            onClick={() => changeLanguage('by')}
          >
            {t('header.belarusian')}
          </Button>
          <Button
            variant="contained"
            component="label"
            onClick={() => changeLanguage('en')}
          >
            {t('header.english')}
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default ChangeLanguage;
