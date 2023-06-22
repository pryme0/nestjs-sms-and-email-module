"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EmailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const mailchimp_nestjs_1 = require("@mindik/mailchimp-nestjs");
const common_1 = require("@nestjs/common");
const mailchimp_service_1 = require("./mailchimp.service");
let EmailModule = EmailModule_1 = class EmailModule {
    static register(mail_chimp_key) {
        return {
            module: EmailModule_1,
            imports: [
                mailchimp_nestjs_1.MailchimpModule.forRootAsync({
                    useFactory: () => {
                        return mail_chimp_key;
                    },
                }),
            ],
            providers: [mailchimp_service_1.EmailService],
            exports: [mailchimp_service_1.EmailService],
        };
    }
};
EmailModule = EmailModule_1 = __decorate([
    (0, common_1.Module)({})
], EmailModule);
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map