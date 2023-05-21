import { MessageType, SeparateMessagesType } from 'src/types';

export const convertDate = (date: string) => {
  const dateParts = date.split('T');
  const day = dateParts[0].slice(8);
  const month = dateParts[0].slice(5, 7);
  const year = dateParts[0].slice(0, 4);
  const newDate = day + '.' + month + '.' + year;
  return newDate;
};

export const convertDateInTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}`;
};

export const separateByDate = (messages: MessageType[]) => {
  const dateMap: SeparateMessagesType = {};
  messages.forEach((message) => {
    const date = convertDate(message.addedAt);
    if (!dateMap[date]) {
      dateMap[date] = [];
    }
    dateMap[date].push(message);
  });
  return dateMap;
};
