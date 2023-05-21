import { instance } from 'src/api/api';

export const dialogsApi = {
  async getAllDialogs() {
    const response = await instance.get('dialogs');
    return response.data;
  },
  async startDialog(userId: number) {
    const response = await instance.put(`dialogs/${userId}`);
    return response.data;
  },
  async getMessagesList(userId: number, page = 1) {
    const response = await instance.get(
      `dialogs/${userId}/messages?page=${page}&count=20`
    );
    return response.data;
  },
  async sendMessage(userId: number, body: string) {
    const response = await instance.post(`dialogs/${userId}/messages`, {
      body,
    });
    return response.data.data.message;
  },
  async isMessageViewed(messageId: number) {
    const response = await instance.get(`dialogs/messages/${messageId}/viewed`);
    return response.data;
  },
  async setMessageToSpam(messageId: number) {
    const response = await instance.post(`dialogs/messages/${messageId}/spam`);
    return response.data;
  },
  async deleteMessage(messageId: number) {
    const response = await instance.delete(`dialogs/messages/${messageId}`);
    return response.data;
  },
  async restoreMessage(messageId: number) {
    const response = await instance.put(
      `dialogs/messages/${messageId}/restore`
    );
    return response.data;
  },
  async getNewestMessages(userId: number, date: string) {
    const response = await instance.get(
      `dialogs/${userId}/messages/new?newerThen=${date}`
    );
    return response.data;
  },
  async getNewMessagesCount() {
    const response = await instance.get(`dialogs/messages/new/count`);
    return response.data;
  },
};
