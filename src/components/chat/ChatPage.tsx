import { FC, useEffect, useState } from 'react';

export const ChatPage: FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log('close');
      setTimeout(createWsChannel, 3000);
    };
    const createWsChannel = () => {
      ws?.removeEventListener('close', closeHandler);
      ws?.close();
			
      ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
      );
      ws?.addEventListener('close', closeHandler);
      setWsChannel(ws);
    };
    createWsChannel();
    return () => {
      ws?.removeEventListener('close', closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div>
      <AddMessageForm wsChannel={wsChannel} />
      <Messages wsChannel={wsChannel} />
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

export const Messages: FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel,
}) => {
  const [messages, setMessages] = useState<MessageProps['message'][]>([]);

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      setMessages((prevState) =>
        [...prevState, ...JSON.parse(e.data)].reverse()
      );
    };
    wsChannel?.addEventListener('message', messageHandler);
    return () => {
      wsChannel?.removeEventListener('message', messageHandler);
      wsChannel?.close();
    };
  }, [wsChannel]);

  return (
    <div>
      {messages.reverse().map((item, index) => (
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

export const AddMessageForm: FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel,
}) => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'pending' | 'ready'>('pending');

  useEffect(() => {
    const openHandler = () => setStatus('ready');
    wsChannel?.addEventListener('open', openHandler);
    return () => {
      wsChannel?.removeEventListener('open', openHandler);
      wsChannel?.close();
    };
  }, [wsChannel]);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChannel?.send(message);
    setMessage('');
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>
      <button type="submit" onClick={sendMessage} disabled={status !== 'ready'}>
        send
      </button>
    </div>
  );
};
