export type MessageType = {
  userName: string;
  photo: string;
  message: string;
};

export type StatusType = 'pending' | 'ready';
type EventType = 'message' | 'status';
type MessageSubscriberType = (messages: MessageType[]) => void;
type StatusSubscriberType = (status: StatusType) => void;

const subscribers = {
  message: [] as MessageSubscriberType[],
  status: [] as StatusSubscriberType[],
};

let ws: WebSocket;

const closeHandler = () => {
  console.log('closeHandler');
  setTimeout(createWsChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  subscribers['message'].forEach((s) => s(JSON.parse(e.data)));
};

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', messageHandler);
};

const changeStatus = (status: StatusType) => {
  subscribers['status'].forEach((s) => s(status));
};

const openHandler = () => {
  changeStatus('ready');
};

const createWsChannel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  );
  changeStatus('pending');
  ws?.addEventListener('close', closeHandler);
  ws?.addEventListener('message', messageHandler);
  ws?.addEventListener('message', openHandler);
};

export const chatApi = {
  start() {
    createWsChannel();
  },
  stop() {
    subscribers.message = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    event: EventType,
    callback: MessageSubscriberType | StatusSubscriberType
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    subscribers[event].push(callback);
  },
  unsubscribe(event: EventType) {
    subscribers[event] = [];
  },
  send(message: MessageType['message']) {
    ws.send(message);
  },
};
