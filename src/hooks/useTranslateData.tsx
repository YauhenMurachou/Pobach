import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import FaceIcon from '@mui/icons-material/Face';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';

export const useTranslateData = () => {
  const { i18n } = useTranslation();
  const navBarData = [
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
  const asideData = [
    {
      icon: <ConnectWithoutContactIcon />,
      text: i18n.t('aside.social'),
    },
    {
      icon: <PersonAddIcon />,
      text: i18n.t('aside.friend'),
    },
    {
      icon: <ChatBubbleOutlineIcon />,
      text: i18n.t('aside.private'),
    },
    {
      icon: <Diversity2Icon />,
      text: i18n.t('aside.chat'),
    },
    {
      icon: <FaceIcon />,
      text: i18n.t('aside.upload'),
    },
    {
      icon: <PostAddIcon />,
      text: i18n.t('aside.post'),
    },
  ];

  const deletedNotify = i18n.t('chat.deletedMessage');

  return { navBarData, asideData, deletedNotify };
};
