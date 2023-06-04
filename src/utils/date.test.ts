import { testMessages, testSeparatedMessages } from 'src/constants';
import { convertDate, convertDateInTime, separateByDate } from 'src/utils/date';

describe('convertDate', () => {
  test('pass 2023-06-03T14:45:30.4, return 03.06.2023', () => {
    expect(convertDate('2023-06-03T14:45:30.4')).toBe('03.06.2023');
  });
});

describe('convertDateInTime', () => {
  test('pass PM 2023-06-03T15:08:47.637, return 15:08:47', () => {
    expect(convertDateInTime('2023-06-03T15:08:47.637')).toBe('15:08:47');
  });
  test('pass AM 2023-05-16T07:27:28.923, return 07:27:28', () => {
    expect(convertDateInTime('2023-05-16T07:27:28.923')).toBe('07:27:28');
  });
});

describe('separate messages by Date', () => {
  test('pass Array with two days, return object with two days', () => {
    expect(separateByDate(testMessages)).toEqual(testSeparatedMessages);
  });
  test('pass Array with one days, return object with one day', () => {
    expect(separateByDate(testMessages.splice(0, 1))).toEqual({
      '03.06.2023': [
        {
          id: '6b178015-b5b0-4e31-b501-50bcca6efcfa',
          body: 'Я закончил этот мессенджер ',
          translatedBody: null,
          addedAt: '2023-06-03T14:45:30.4',
          senderId: 26059,
          senderName: 'polyakog',
          recipientId: 17658,
          viewed: true,
        },
      ],
    });
  });
});
