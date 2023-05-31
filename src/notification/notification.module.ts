import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { SmsModule, EmailModule } from '@messenger/libs';

@Module({
  imports: [SmsModule, EmailModule],
  providers: [NotificationResolver, NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
