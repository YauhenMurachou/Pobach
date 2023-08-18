import { FC, memo } from 'react';

import { useRestore } from 'src/hooks/useRestore';

import classes from './DeletedMessage.module.css';

type Props = {
  restoreMessage: () => void;
};

export const DeletedMessage: FC<Props> = memo(({ restoreMessage }) => {
  const [deletion, recovery] = useRestore();
  return (
    <div className={classes.message}>
      <span>{deletion}</span>.{' '}
      <span className={classes.recovery} onClick={restoreMessage} role="button">
        {recovery}
      </span>
    </div>
  );
});
