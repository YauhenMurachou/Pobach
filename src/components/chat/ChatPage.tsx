import { FC, useEffect, useState } from 'react';

const ws = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
);

export const ChatPage: FC = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

type MessageProps = {
  message: {
    userName: string;
    photo: string;
    message: string;
  };
};

export const Messages: FC = () => {
  const [messages, setMessages] = useState<MessageProps['message'][]>([]);

  useEffect(() => {
    ws.addEventListener('message', (e) =>
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)])
    );
  }, []);

  return (
    <div>
      {messages.map((item, index) => (
        <Message key={item.userName + index.toString()} message={item} />
      ))}
    </div>
  );
};

export const Message: FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} alt={message.userName} />
      <div>{message.userName}</div>
      <div>{message.message}</div>
    </div>
  );
};

export const AddMessageForm = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message) {
      return;
    }
    ws.send(message);
    setMessage('');
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>
      <button type="submit" onClick={sendMessage}>
        send
      </button>
    </div>
  );
};
