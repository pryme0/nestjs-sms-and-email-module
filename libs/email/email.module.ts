import { MailchimpModule } from '@mindik/mailchimp-nestjs';
import { Module } from '@nestjs/common';
import { MailChimpEmailServcie } from './mailchimp.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailchimpModule.forRootAsync({
      useFactory: () => {
        return process.env.MAILCHIMP_KEY;
      },
    }),
  ],
  providers: [MailChimpEmailServcie],
  exports: [MailChimpEmailServcie],
})
export class EmailModule {}
