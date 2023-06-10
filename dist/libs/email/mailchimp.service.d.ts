import { MailChimpEmailInterface, MailChimpTemplateEmailInterface } from './email.interface';
export declare class MailChimpEmailServcie {
    private readonly mail;
    constructor(mail: any);
    sendMail(payload: MailChimpEmailInterface): Promise<any>;
    sendMailTemplate(payload: MailChimpTemplateEmailInterface): Promise<any>;
    getTemplates(filter: Record<string, string>): Promise<any>;
}
