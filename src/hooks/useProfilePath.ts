import { useMemo } from 'react';

import { getProfilePath } from 'src/utils/users';

export const useProfilePath = (id: string | number) => {
  const profilePath = useMemo(() => getProfilePath(id as number), [id]);
  return profilePath;
};
