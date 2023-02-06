import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { action, RootState } from 'src/redux/redux-store';

const Settings: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { count, todos } = useSelector((state: RootState) => state.settings);
  const onIncrement = () => action('INCREMENT');
  const onDecrement = () => action('DECREMENT');
  const onIncrementAsync = () => action('INCREMENT_ASYNC');
  const onGetTodos = () => action('TODOS_REQUESTED');
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
