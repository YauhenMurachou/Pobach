import { all, call, put, takeEvery } from 'redux-saga/effects';
import { todosApi } from 'src/api/api';
import { actions, Todos } from 'src/redux/settingsReducer';

const delay = (ms?: number) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* getTodos() {
  const todos: Todos = yield call(() => todosApi.getTodos(1));
  yield put(actions.getTodosAction(todos));
}

function* todosSaga() {
  yield takeEvery('TODOS_REQUESTED', getTodos);
}

export function* rootSaga() {
  yield all([watchIncrementAsync(), todosSaga()]);
}
