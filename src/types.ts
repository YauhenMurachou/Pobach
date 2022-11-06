export type UserType = {
  id: number;
  name?: string;
  status?: string;
  photos?: { small: string; large: string };
  followed?: boolean;
  city?: boolean;
  country?: boolean;
};

export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: boolean;
  fullName: boolean;
  contacts: ContactsType;
  photos: { small: string; large: string } | null;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
