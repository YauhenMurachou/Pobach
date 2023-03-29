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
  contacts: ContactsType;
  photos: { small: string; large: string } | null;
};

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
