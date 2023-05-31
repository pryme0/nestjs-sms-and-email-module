import { SendSmsInput } from '@notificationModule/dto';
import { TERMII_SMS_API_URL } from './constants';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SmsService {
  async sendSms(payload: SendSmsInput) {
    try {
      return await axios.post(`${TERMII_SMS_API_URL}/send`, {
        ...payload,
        api_key: process.env.TERMI_API_KEY,
      });
    } catch (error) {
      throw error.response.data.message;
    }
  }

  async sendBulkSms(payload: SendSmsInput) {
    try {
      return await axios.post(`${TERMII_SMS_API_URL}/send/bulk`, {
        ...payload,
        api_key: process.env.TERMI_API_KEY,
      });
    } catch (error) {
      throw error;
    }
  }
}
