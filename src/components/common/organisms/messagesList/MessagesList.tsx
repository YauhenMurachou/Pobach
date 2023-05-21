import { FC, memo, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MessagesDay } from 'src/components/common/molecules/messagesDay/MessagesDay';
import { getMessagesListAction } from 'src/redux/dialogsReducer';
import { MessagesListType } from 'src/types';
import { separateByDate } from 'src/utils/date';

import classes from './MessagesList.module.css';

type Props = {
  messages: MessagesListType;
  friendAvatar?: string;
  dialogId: number;
};

export const MessagesList: FC<Props> = memo(
  ({ messages, friendAvatar, dialogId }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
      scrollRef.current?.scrollIntoView();
    }, [messages]);

    const separatedMessages = separateByDate(messages.items);
    const dates = Object.keys(separatedMessages);
    const sortedMessages = Object.values(separatedMessages);
    const pagesCount = Math.ceil(messages.totalCount / 20);
    let pageNumber = 1;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && pageNumber < pagesCount) {
          pageNumber++;
          dispatch(getMessagesListAction({ id: dialogId, page: pageNumber }));
        }
      });
    });

    useEffect(() => {
      if (topRef.current && pagesCount > 1) {
        observer.observe(topRef.current);
      }
    }, []); // eslint-disable-line

    return (
      <div className={classes.messagesWrapper}>
        <div ref={topRef}></div>
        {dates.map((day, index) => (
          <MessagesDay
            key={index}
            title={day}
            messages={sortedMessages[index]}
            friendAvatar={friendAvatar}
          />
        ))}
        <div ref={scrollRef}></div>
      </div>
    );
  }
);
