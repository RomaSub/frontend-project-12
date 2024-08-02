import { TFunction } from 'i18next';
import * as yup from 'yup';

export const signupSchema = (t: TFunction) =>
  yup.object().shape({
    username: yup
      .string()
      .trim()
      .min(3, t('error.invalidLength'))
      .max(20, t('error.invalidLength'))
      .required(t('error.required')),
    password: yup.string().min(6, t('error.shortPassword')).required(t('error.required')),
    confirmPassword: yup
      .string()
      .required(t('error.required'))
      .oneOf([yup.ref('password')], t('error.notConfirmPassword'))
  });

export const modalSchema = (channelNames: string[], t: TFunction) =>
  yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, t('error.invalidLength'))
      .max(20, t('error.invalidLength'))
      .required(t('error.required'))
      .notOneOf(channelNames, t('error.uniq'))
  });
