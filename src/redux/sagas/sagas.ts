import { all, call, put, takeEvery } from 'redux-saga/effects';
import { photoSagaApi } from 'src/api/api';
import { dialogsApi } from 'src/api/dialogsApi';
import { usersApi } from 'src/api/usersApi';
import {
  allDialogsGet,
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
import { Dialog, FriendsType, Message } from 'src/types';

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
    photoSaga(),
    dialogsSaga(),
    getMessagesSaga(),
    sendMessageSaga(),
    getFriendsSaga(),
    startDialogsSaga(),
  ]);
}
