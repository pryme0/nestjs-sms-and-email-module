"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const constants_1 = require("./constants");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SmsService = exports.SmsService = class SmsService {
    constructor(Api_Key) {
        this.Api_Key = Api_Key;
        this.api_key = Api_Key;
    }
    async sendSms(payload) {
        try {
            const send = await axios_1.default.post(`${constants_1.TERMII_SMS_API_URL}/send`, Object.assign(Object.assign({}, payload), { api_key: this.api_key }));
            return { message: send.data.message };
        }
        catch (error) {
            throw error.response.data.message;
        }
    }
    async sendBulkSms(payload) {
        try {
            return await axios_1.default.post(`${constants_1.TERMII_SMS_API_URL}/send/bulk`, Object.assign(Object.assign({}, payload), { api_key: this.api_key }));
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], SmsService);
//# sourceMappingURL=sms.service.js.map