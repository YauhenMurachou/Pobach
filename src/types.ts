export type Timeout = ReturnType<typeof setTimeout>;

export type ID = { id: number; page?: number };

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: { small: string; large: string };
  followed: boolean;
  city?: boolean;
  country?: boolean;
  uniqueUrlName: null | string;
};

export type FriendsType = {
  error: string | null;
  items: UserType[];
  totalCount: number;
};

export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: boolean;
  fullName: string;
  aboutMe: string;
  contacts: ContactsType;
  photos: { small: string; large: string } | null;
};

export type EditProfileType = Omit<ProfileType, 'userId' | 'photos'>;

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type Dialog = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: { small: string; large: string } | null;
};

export type MessageType = {
  id: string;
  body: string;
  translatedBody: string | null;
  addedAt: string;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
  deleted?: boolean;
};

export type MessagesListType = {
  items: MessageType[];
  totalCount: number;
  error: null | string;
};

export type NewMessage = { id: number; body: string };

export type ChatMessage = {
  userName: string;
  photo: string;
  message: string;
  userId: number;
  id?: string;
  deleted?: boolean;
  deletedMessage?: string;
};

export type ChatStatus = 'pending' | 'ready';

export type SeparateMessagesType = {
  [key: string]: MessageType[];
};
