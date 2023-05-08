import i18n from 'src/i18n';
import { ChatMessage } from 'src/types';

const sendNotification = (
  message: ChatMessage['message'],
  user: ChatMessage['userName'],
  currentUrl: string,
  isMuted: boolean
) => {
  const notification = new Notification(i18n.t('chat.newMessage'), {
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    body: `@${user}: ${message}`,
    silent: isMuted,
  });
  const lastIndex = currentUrl.lastIndexOf('#');
  const newUrl = currentUrl.slice(0, lastIndex + 1) + '/Chat';
  const redirectChat = () => {
    window.location.replace(newUrl);
  };
  notification.onclick = redirectChat;
};

export const checkPageStatus = (
  message: ChatMessage['message'],
  user: ChatMessage['userName'],
  currentUrl: string,
  isMuted: boolean
) => {
  if (!('Notification' in window)) {
    alert('This browser does not support system notifications!');
  } else if (Notification.permission === 'granted') {
    sendNotification(message, user, currentUrl, isMuted);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        sendNotification(message, user, currentUrl, isMuted);
      }
    });
  }
};
