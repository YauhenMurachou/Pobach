export type UserType = {
  id: number;
  name?: string;
  status?: string;
  photos?: { small: string; large: string };
  followed?: boolean;
  city?: boolean;
  country?: boolean;
};
