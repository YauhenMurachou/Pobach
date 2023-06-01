import { FC, memo } from 'react';

import { DialogMessage } from 'src/components/common/molecules/dialogMessage/DialogMessage';
import { MessageType } from 'src/types';

import classes from './MessagesDay.module.css';

type Props = {
  messages: MessageType[];
  title: string;
  friendAvatar?: string;
};

export const MessagesDay: FC<Props> = memo(
  ({ messages, title, friendAvatar }) => (
    <>
      <h5 className={classes.dayTitle}>{title}</h5>
      <div className={classes.dayWrapper}>
        {messages.map((message) => (
          <DialogMessage
            key={message.id}
            id={message.id}
            addedAt={message.addedAt}
            body={message.body}
            recipientId={message.recipientId}
            senderId={message.senderId}
            senderName={message.senderName}
            translatedBody={message.translatedBody}
            viewed={message.viewed}
            friendAvatar={friendAvatar}
          />
        ))}
      </div>
    </>
  )
);
