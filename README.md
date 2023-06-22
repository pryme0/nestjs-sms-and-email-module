
<p  align="center">
<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo"  /></a>
</p>

## Description

@prymejo/nestjs-sms-and-email-module is a simple package that provides functionalities for sending emails and sms.

# Key features

 1. Send bulk sms
 2. Send single sms
 3. Send Email with text
 4. Send email with temmplate ( templates can be generated on mandrill or mailchimp)

## About

This is a simple implementation for sending email and sms notifications with nestjs .
It uses Mailchimp( Mandrill <https://mailchimp.com> ) for sending emails and Termii (<https://termii.com/>) for sending sms.

**Sample payload for sending sms**

//you will need to set the senderId from the

    input: {
    from:"sender@mail.com" 
    to:"+2348007910016"
    sms:"test message"
    channel:GENERIC
    type:"plain"
    }

**Sample payload for sending email**

//you will need to set the from_mail on the mandrill dashboard

    input: {
    message: {
    to: [{ email: "johndoe@mailreciever.com" }]
    text: "testing email"
    from_email: "janedoe@mailsender.com"
    subject:"testing emails"
    }
    }

### Initializing the sms module

    import {SmsModule} from '@prymejo/nestjs-sms-and-email-module';
    
    @module({
    imports:[SmsModule.register(TERMII_API_KEY)]
    })

### Using the sms service

    import {SmsService} from '@prymejo/nestjs-sms-and-email-module';
    
    export class UserService{
    constructor(private readonly smsService:SmsService){
    }
  
    async sendOtp(payload:SendSmsInterface){
    await this.smsService.sendSms(payload)
    }

### Initializing the Email module

    import {EmailModule} from '@prymejo/nestjs-sms-and-email-module';
    
    @module({
    imports:[EmailModule.register(MANDRILL_API_KEY)]
    })

### Using the email service

    import {EmailService} from '@prymejo/nestjs-sms-and-email-module';
    
    export class UserService{
    constructor(private readonly emailService:EmailService){}
    async sendEmail(payload:MailChimpEmailInterface){
    await this.emailService.sendMail(payload)
    }

PS: Contributions are welcome.

 Note : you will need to create accounts on both Mandrill ((<https://mailchimp.com>) docs can be found at <https://mailchimp.com/developer/transactional/api/> ) and Termii((<https://termii.com/>) docs can be found at <https://developer.termii.com/switch>) to obtain thier api keys.

## Installation

    npm  install  @prymejo/nestjs-sms-and-email-module
    
    yarn  add  @prymejo/nestjs-sms-and-email-module

- Author - [pryme0] <obochi2@gmail.com>

## License

Nest is [MIT licensed](LICENSE).
