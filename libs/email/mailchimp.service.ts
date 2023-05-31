import { InjectMailchimp } from '@mindik/mailchimp-nestjs';
import { Injectable } from '@nestjs/common';
import {
  MailChimpEmailInterface,
  MailChimpTemplateEmailInterface,
} from './email.interface';

@Injectable()
export class MailChimpEmailServcie {
  constructor(@InjectMailchimp() private readonly mail) {}

  async sendMail(payload: MailChimpEmailInterface) {
    try {
      return await this.mail.messages.send(payload);
    } catch (error) {
      throw error;
    }
  }

  async sendMailTemplate(payload: MailChimpTemplateEmailInterface) {
    try {
      return await this.mail.messages.sendTemplate(payload);
    } catch (error) {
      throw error;
    }
  }

  async getTemplates(filter: Record<string, string>) {
    try {
      return await this.mail.templates.list(filter || {});
    } catch (error) {
      throw error;
    }
  }
}
