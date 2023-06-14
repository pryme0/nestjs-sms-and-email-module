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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailchimp_nestjs_1 = require("@mindik/mailchimp-nestjs");
const common_1 = require("@nestjs/common");
let EmailService = exports.EmailService = class EmailService {
    constructor(mail) {
        this.mail = mail;
    }
    async sendMail(payload) {
        try {
            return await this.mail.messages.send(payload);
        }
        catch (error) {
            throw error;
        }
    }
    async sendMailTemplate(payload) {
        try {
            return await this.mail.messages.sendTemplate(payload);
        }
        catch (error) {
            throw error;
        }
    }
    async getTemplates(filter) {
        try {
            return await this.mail.templates.list(filter || {});
        }
        catch (error) {
            throw error;
        }
    }
};
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mailchimp_nestjs_1.InjectMailchimp)()),
    __metadata("design:paramtypes", [Object])
], EmailService);
//# sourceMappingURL=mailchimp.service.js.map