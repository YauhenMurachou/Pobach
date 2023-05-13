import { Dispatch, FC, SetStateAction } from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-mui';

type Props = {
  captchaImageUrl: string | null;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Captcha: FC<Props> = ({ captchaImageUrl, value, setValue }) => (
  <>
    <img
      src={captchaImageUrl as string}
      alt="captcha"
      width="180px"
      height="90px"
    />
    <Field
      fullWidth
      placeholder="captcha"
      name="captcha"
      id="captcha"
      type="text"
      label="captcha"
      component={TextField}
      disabled={!captchaImageUrl}
      value={value}
      onChange={(e: { target: { value: SetStateAction<string> } }) =>
        setValue(e.target.value)
      }
    />
  </>
);

export default Captcha;
