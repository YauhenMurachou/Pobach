import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhotoIcon from '@mui/icons-material/Photo';
import SettingsIcon from '@mui/icons-material/Settings';
import i18n from 'src/i18n';

export const navBarData = [
  {
    path: '',
    icon: <AccountBoxIcon />,
    text: i18n.t('navbar.profile'),
  },
  {
    path: '/Dialogs',
    icon: <MailOutlineIcon />,
    text: i18n.t('navbar.dialogs'),
  },
  {
    path: '/Photos',
    icon: <PhotoIcon />,
    text: i18n.t('navbar.photos'),
  },
  {
    path: '/Settings',
    icon: <SettingsIcon />,
    text: i18n.t('navbar.settings'),
  },
  {
    path: '/Users',
    icon: <GroupIcon />,
    text: i18n.t('navbar.users'),
  },
  {
    path: '/Friends',
    icon: <HandshakeIcon />,
    text: i18n.t('navbar.friends'),
  },
  {
    path: '/Chat',
    icon: <ChatBubbleOutlineIcon />,
    text: i18n.t('navbar.chat'),
  },
];
