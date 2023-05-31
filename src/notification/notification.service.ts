import { Injectable } from '@nestjs/common';
import {
  MailChimpEmailServcie,
  MailChimpEmailInterface,
  MailChimpTemplateEmailInterface,
  SmsService,
} from '@messenger/libs';
import { SendNotificationResponse, SendSmsInput } from './dto';

@Injectable()
export class NotificationService {
  constructor(
    private readonly emailService: MailChimpEmailServcie,
    private readonly smsService: SmsService,
  ) {}

  sendEmailNotification(
    input: MailChimpEmailInterface,
  ): SendNotificationResponse {
    this.emailService.sendMail(input);
    return { message: 'email sucessfully sent!' };
  }

  sendEmailTemplateNotification(
    input: MailChimpTemplateEmailInterface,
  ): SendNotificationResponse {
    this.emailService.sendMailTemplate(input);
    return { message: 'email sucessfully sent!' };
  }

  async getEmailTemplates(filter?: any): Promise<any> {
    return await this.emailService.getTemplates(filter);
  }

  sendSmsNotification(payload: SendSmsInput): SendNotificationResponse {
    this.smsService.sendSms(payload);
    return { message: 'sms sucessfully sent!' };
  }

  sendBulkSmsNotification(payload: SendSmsInput): SendNotificationResponse {
    this.smsService.sendBulkSms(payload);
    return { message: 'sms sucessfully sent!' };
  }
}
