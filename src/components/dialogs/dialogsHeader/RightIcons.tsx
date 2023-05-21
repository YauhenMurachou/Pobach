import { FC } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { IconButton, InputAdornment } from '@mui/material';

const RightIcons: FC = () => (
  <InputAdornment position="start">
    <IconButton>
      <PhoneForwardedIcon />
    </IconButton>
    <IconButton>
      <CreateIcon />
    </IconButton>
    <IconButton>
      <MoreHorizIcon />
    </IconButton>
  </InputAdornment>
);

export default RightIcons;
