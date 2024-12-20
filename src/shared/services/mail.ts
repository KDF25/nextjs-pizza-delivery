import { IMailData } from '@shared/ui';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const sendMail = async (mailData: IMailData) => {
  try {
    const response = await axiosInstance.post(ApiRoutes.SEND_MAIL, mailData);
    return response.data;
  } catch (error) {
    console.error('Error sending mail:', error);
    throw error;
  }
};
