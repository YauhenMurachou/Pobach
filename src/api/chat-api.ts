export type MessageType = {
  userName: string;
  photo: string;
  message: string;
};

type SubscriberType = (messages: MessageType[]) => void;

let subscribers = [] as SubscriberType[];
let ws: WebSocket;

const closeHandler = () => {
  setTimeout(createWsChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  subscribers.forEach((s) => s(JSON.parse(e.data)));
};

const createWsChannel = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.close();
  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  );
  ws?.addEventListener('close', closeHandler);
  ws?.addEventListener('message', messageHandler);
};

export const chatApi = {
  start() {
    createWsChannel();
  },
  stop() {
    subscribers = [];
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.close();
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);
  },
  unsubscribe() {
    subscribers = [];
  },
  send(message: MessageType['message']) {
    ws.send(message);
  },
};
