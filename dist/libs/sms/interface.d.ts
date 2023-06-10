export declare enum TermiiSmsChannels {
    DND = "dnd",
    WHATSAPP = "whatsapp",
    GENERIC = "generic"
}
export interface SendSmsInterface {
    from?: string;
    to: string | string[];
    type: string;
    channel?: TermiiSmsChannels;
    sms: string;
}
