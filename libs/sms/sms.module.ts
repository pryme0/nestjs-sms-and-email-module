import { Module, DynamicModule } from '@nestjs/common';
import { SmsService } from './sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({})
export class SmsModule {
  static register(SMS_API_KEY): DynamicModule {
    return {
      module: SmsModule,
      imports: [HttpModule],
      providers: [
        {
          provide: SmsService,
          useFactory: () => {
            return new SmsService(SMS_API_KEY);
          },
        },
      ],
      exports: [
        {
          provide: SmsService,
          useFactory: () => {
            return new SmsService(SMS_API_KEY);
          },
        },
      ],
    };
  }
}
