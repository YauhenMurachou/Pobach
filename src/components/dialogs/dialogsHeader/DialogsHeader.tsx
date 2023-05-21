import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchField from 'src/components/common/atoms/searchField/SearchField';
import RightIcons from 'src/components/dialogs/dialogsHeader/RightIcons';

import classes from './DialogsHeader.module.css';

const DialogsHeader: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <SearchField
        isSearch={false}
        placeholder={t('dialogs.search')}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        rightIcons={<RightIcons />}
        isDisabled
      />
    </div>
  );
};
export default DialogsHeader;
