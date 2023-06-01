import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { FC, MouseEvent } from 'react';

type Props = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (e: MouseEvent<HTMLButtonElement>) => void;
};

const PasswordIcon: FC<Props> = ({
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => (
  <InputAdornment position="end">
    <IconButton
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      edge="end"
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>
);

export default PasswordIcon;
