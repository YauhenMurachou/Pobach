import { all, call, put, takeEvery } from 'redux-saga/effects';
import { photoSagaApi, todosApi } from 'src/api/api';
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

function* getTodos() {
  const todos: Todos = yield call(() => todosApi.getTodos(1));
  yield put(actions.getTodosAction(todos));
}

function* getPhotos() {
  const photoSaga: SagaPhoto[] = yield call(() => photoSagaApi.getPhotos());
  yield put(sagaPhotosAdded(photoSaga));
}

function* todosSaga() {
  yield takeEvery('TODOS_REQUESTED', getTodos);
}

function* photoSaga() {
  yield takeEvery('PHOTOS_REQUESTED', getPhotos);
}

export function* rootSaga() {
  yield all([watchIncrementAsync(), todosSaga(), photoSaga()]);
}