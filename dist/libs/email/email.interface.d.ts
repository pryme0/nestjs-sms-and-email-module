export interface SendEmailInterface {
    to: string;
    from: string;
    subject: string;
    context?: {
        [name: string]: any;
    };
    template?: string;
    text?: string;
}
export interface BaseMailchimpInterface {
    key?: string;
    send_At?: string;
}
export interface BaseMailChimpEmailContent {
    name: string;
    content: string;
}
export interface MailChimpAttachmentPayload extends BaseMailChimpEmailContent {
    type: string;
}
export interface MailChimpToPayload {
    email: string;
}
export interface MailChimpMessagePayload {
    to: MailChimpToPayload[] | MailChimpToPayload;
    text?: string;
    subject?: string;
    from_email: string;
    template?: string;
    from_name?: string;
    attachements?: MailChimpAttachmentPayload;
    image?: MailChimpAttachmentPayload;
    important?: boolean;
    auto_text?: boolean;
    tags?: string[];
    track_opens?: boolean;
    track_clicks?: boolean;
    headers?: {
        [name: string]: any;
    };
}
export interface MailChimpEmailInterface extends BaseMailchimpInterface {
    message: MailChimpMessagePayload | MailChimpMessagePayload[];
}
export interface MailChimpTemplateEmailInterface extends BaseMailchimpInterface {
    message: MailChimpMessagePayload | MailChimpMessagePayload[];
    template_name: string;
    template_content: BaseMailChimpEmailContent[];
    async?: boolean;
}
