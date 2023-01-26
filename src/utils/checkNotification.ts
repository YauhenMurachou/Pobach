import { MessageType } from 'src/api/chat-api';

const sendNotification = (
  message: MessageType['message'],
  user: MessageType['userName'],
  currentUrl: string
) => {
  const notification = new Notification('New message from Open Chat', {
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    body: `@${user}: ${message}`,
  });
  const lastIndex = currentUrl.lastIndexOf('#');
  const newUrl = currentUrl.slice(0, lastIndex + 1) + '/Chat';
  const redirectChat = () => {
    window.location.replace(newUrl);
  };
  notification.onclick = redirectChat;
};

export const checkPageStatus = (
  message: MessageType['message'],
  user: MessageType['userName'],
  currentUrl: string
) => {
  if (!('Notification' in window)) {
    alert('This browser does not support system notifications!');
  } else if (Notification.permission === 'granted') {
    sendNotification(message, user, currentUrl);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        sendNotification(message, user, currentUrl);
      }
    });
  }
};
