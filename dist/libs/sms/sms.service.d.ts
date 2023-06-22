import { SendSmsInterface } from './interface';
export declare class SmsService {
    private Api_Key;
    api_key: any;
    constructor(Api_Key: any);
    sendSms(payload: SendSmsInterface): Promise<{
        message: any;
    }>;
    sendBulkSms(payload: SendSmsInterface): Promise<import("axios").AxiosResponse<any, any>>;
}
