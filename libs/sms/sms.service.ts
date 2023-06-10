import { TERMII_SMS_API_URL } from './constants';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SendSmsInterface } from './interface';

@Injectable()
export class SmsService {
  api_key;
  constructor(private Api_Key) {
    this.api_key = Api_Key;
  }

  async sendSms(payload: SendSmsInterface) {
    try {
      const send = await axios.post(`${TERMII_SMS_API_URL}/send`, {
        ...payload,
        api_key: this.api_key,
      });

      return { message: send.data.message };
    } catch (error) {
      throw error.response.data.message;
    }
  }

  async sendBulkSms(payload: SendSmsInterface) {
    try {
      return await axios.post(`${TERMII_SMS_API_URL}/send/bulk`, {
        ...payload,
        api_key: this.api_key,
      });
    } catch (error) {
      throw error;
    }
  }
}
