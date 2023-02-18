import { all, call, put, takeEvery } from 'redux-saga/effects';
import { dialogsApi, photoSagaApi, todosApi } from 'src/api/api';
import {
  allDialogsGet,
  Dialog,
  getDialogsAction,
  getMessagesListAction,
  MessagesList,
  messagesListGet,
  sendMessageAction,
} from 'src/redux/dialogsReducer';
import { SagaPhoto, sagaPhotosAdded } from 'src/redux/photosReducer';
import { actions, Todos } from 'src/redux/settingsReducer';

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

// Our worker
function* getTodos() {
  const todos: Todos = yield call(() => todosApi.getTodos(1));
  yield put(actions.getTodosAction(todos));
}

// Our worker
function* getPhotos() {
  const photoSaga: SagaPhoto[] = yield call(() => photoSagaApi.getPhotos());
  yield put(sagaPhotosAdded(photoSaga));
}

// Our worker
function* getAllDialogs() {
  const allDialogs: Dialog[] = yield call(() => dialogsApi.getAllDialogs());
  yield put(allDialogsGet(allDialogs));
}

// Our worker
function* getMessagesList(action: { payload: { id: number } }) {
  const messagesList: MessagesList[] = yield call(() =>
    dialogsApi.getMessagesList(action.payload.id)
  );
  yield put(messagesListGet(messagesList));
}

// Our worker
function* sendMessage(action: { payload: { id: number } }) {
  yield call(
    () => dialogsApi.sendMessage(action.payload.id)
    // dialogsApi.sendMessage(action.payload.id)
  );
  // yield put(messagesListGet(messagesList));
}

// Our watcher
function* todosSaga() {
  yield takeEvery('TODOS_REQUESTED', getTodos);
}

// Our watcher
function* photoSaga() {
  yield takeEvery('PHOTOS_REQUESTED', getPhotos);
}

// Our watcher
function* dialogsSaga() {
  yield takeEvery(getDialogsAction, getAllDialogs);
}

// Our watcher
function* getMessagesSaga() {
  yield takeEvery(getMessagesListAction, getMessagesList);
}

// Our watcher
function* sendMessageSaga() {
  yield takeEvery(sendMessageAction, sendMessage);
}

export function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    todosSaga(),
    photoSaga(),
    dialogsSaga(),
    getMessagesSaga(),
    sendMessageSaga(),
  ]);
}
