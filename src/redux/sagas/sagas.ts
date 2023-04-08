import { all, call, put, takeEvery } from 'redux-saga/effects';
import { dialogsApi, photoSagaApi, todosApi, usersApi } from 'src/api/api';
import {
  allDialogsGet,
  Dialog,
  getDialogsAction,
  getMessagesListAction,
  messageAdd,
  MessagesList,
  messagesListGet,
  sendMessageAction,
  startDialogAction,
} from 'src/redux/dialogsReducer';
import { friendsGet, getFriendsAction } from 'src/redux/friendsReducer';
import { SagaPhoto, sagaPhotosAdded } from 'src/redux/photosReducer';
import { actions, Todos } from 'src/redux/settingsReducer';
import { FriendsType, Message } from 'src/types';

const delay = (ms?: number) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
// будет запускаться в зависимости от выполнененного экшена. Тут описывается вся бизнес-логика приложения
// (логика запросов, работа с браузерным апи, любые асинхронные действия)
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
//Предназначен для слежения за экшенами, и когда происходит экшн, выполняет определённое действие
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* getTodos() {
  const todos: Todos = yield call(() => todosApi.getTodos(1));
  yield put(actions.getTodosAction(todos));
}

function* getPhotos() {
  const photoSaga: SagaPhoto[] = yield call(() => photoSagaApi.getPhotos());
  yield put(sagaPhotosAdded(photoSaga));
}

function* getAllDialogs() {
  const allDialogs: Dialog[] = yield call(() => dialogsApi.getAllDialogs());
  yield put(allDialogsGet(allDialogs));
}

function* startDialog(action: { payload: { id: number } }) {
  const dialog: Dialog = yield call(() =>
    dialogsApi.startDialog(action.payload.id)
  );
  console.log('startDialog', dialog);
}

function* getMessagesList(action: { payload: { id: number } }) {
  const messagesList: MessagesList[] = yield call(() =>
    dialogsApi.getMessagesList(action.payload.id)
  );
  yield put(messagesListGet(messagesList));
}

function* sendMessage(action: { payload: { id: number; body: string } }) {
  const { id, body } = action.payload;
  const sentMessage: Message = yield call(() =>
    dialogsApi.sendMessage(id, body)
  );
  yield put(messageAdd(sentMessage));
}

// Our worker
function* getFriends() {
  const friends: FriendsType = yield call(() => usersApi.getFriends());
  yield put(friendsGet(friends.items));
}

function* todosSaga() {
  yield takeEvery('TODOS_REQUESTED', getTodos);
}

function* photoSaga() {
  yield takeEvery('PHOTOS_REQUESTED', getPhotos);
}

function* dialogsSaga() {
  yield takeEvery(getDialogsAction, getAllDialogs);
}

function* startDialogsSaga() {
  yield takeEvery(startDialogAction, startDialog);
}

function* getMessagesSaga() {
  yield takeEvery(getMessagesListAction, getMessagesList);
}

function* sendMessageSaga() {
  yield takeEvery(sendMessageAction, sendMessage);
}

// Our watcher
function* getFriendsSaga() {
  yield takeEvery(getFriendsAction, getFriends);
}

export function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    todosSaga(),
    photoSaga(),
    dialogsSaga(),
    getMessagesSaga(),
    sendMessageSaga(),
    getFriendsSaga(),
    startDialogsSaga(),
  ]);
}
