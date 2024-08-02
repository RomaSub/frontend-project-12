import { TFunction } from 'i18next';
import * as yup from 'yup';

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
