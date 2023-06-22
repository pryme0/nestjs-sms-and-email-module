"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SmsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsModule = void 0;
const common_1 = require("@nestjs/common");
const sms_service_1 = require("./sms.service");
const axios_1 = require("@nestjs/axios");
let SmsModule = SmsModule_1 = class SmsModule {
    static register(SMS_API_KEY) {
        return {
            module: SmsModule_1,
            imports: [axios_1.HttpModule],
            providers: [
                {
                    provide: sms_service_1.SmsService,
                    useFactory: () => {
                        return new sms_service_1.SmsService(SMS_API_KEY);
                    },
                },
            ],
            exports: [
                {
                    provide: sms_service_1.SmsService,
                    useFactory: () => {
                        return new sms_service_1.SmsService(SMS_API_KEY);
                    },
                },
            ],
        };
    }
};
SmsModule = SmsModule_1 = __decorate([
    (0, common_1.Module)({})
], SmsModule);
exports.SmsModule = SmsModule;
//# sourceMappingURL=sms.module.js.map