import { MailchimpModule } from '@mindik/mailchimp-nestjs';
import { DynamicModule, Module } from '@nestjs/common';
import { EmailService } from './mailchimp.service';

@Module({})
export class EmailModule {
  static register(mail_chimp_key): DynamicModule {
    return {
      module: EmailModule,
      imports: [
        MailchimpModule.forRootAsync({
          useFactory: () => {
            return mail_chimp_key;
          },
        }),
      ],
      providers: [EmailService],
      exports: [EmailService],
    };
  }
}
