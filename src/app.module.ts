import { Module } from '@nestjs/common';

import { NotificationModule } from '@notificationModule/notification.module';
import { GqlConfigModule } from '@messenger/libs';

@Module({
  imports: [GqlConfigModule, NotificationModule],
})
export class AppModule {}
