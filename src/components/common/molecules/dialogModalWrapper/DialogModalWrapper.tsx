import { Dispatch, FC, SetStateAction } from 'react';

import Popper from 'src/components/common/atoms/popper/Popper';
import DialogModal from 'src/components/common/molecules/dialogModal/DialogModal';
import { UserType } from 'src/types';

type Props = {
  isDialogOpen: boolean;
  handleDialogOpen: () => void;
  setPopperOpen: Dispatch<SetStateAction<boolean>>;
  companion: UserType;
  isPopperOpen: boolean;
};

const DialogModalWrapper: FC<Props> = ({
  isDialogOpen,
  handleDialogOpen,
  setPopperOpen,
  companion,
  isPopperOpen,
}) => (
  <>
    <DialogModal
      isOpen={isDialogOpen}
      handleClose={handleDialogOpen}
      setPopperOpen={setPopperOpen}
      companion={companion}
    />
    <Popper
      isOpen={isPopperOpen}
      placement="bottom-start"
      anchorEl={document.body}
      handleClose={() => setPopperOpen(false)}
      companion={companion}
    />
  </>
);

export default DialogModalWrapper;
