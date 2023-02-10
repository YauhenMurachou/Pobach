import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'src/redux/redux-store';
import { actions } from 'src/redux/settingsReducer';

const Settings: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { count, todos } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  const onIncrement = () => dispatch(actions.incrementAction());
  const onDecrement = () => dispatch(actions.decrementAction());
  const onIncrementAsync = () => dispatch(actions.incrementAsyncAction());
  const onGetTodos = () => dispatch(actions.todosRequestedAction());
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <>
      <h4>This is just test page for practice in Redux-saga</h4>
      <div>
        <button onClick={onIncrement} type="button">
          Increment
        </button>{' '}
      </div>
      <div>
        <button onClick={onDecrement} type="button">
          Decrement
        </button>
      </div>
      <div>
        <button type="button" onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
      </div>
      <div>
        <button type="button" onClick={onGetTodos}>
          onGetTodos
        </button>
      </div>
      <hr />
      <div>Clicked: {count} times</div>
      {todos && <div>Todo:{todos.title}</div>}
    </>
  );
};

export default Settings;
