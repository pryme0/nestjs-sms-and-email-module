import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import {
  MailChimpEmailInput,
  SendSmsInput,
  SendNotificationResponse,
} from './dto';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => SendNotificationResponse)
  sendEmailNotification(
    @Args('input')
    createNotificationInput: MailChimpEmailInput,
  ): SendNotificationResponse {
    return this.notificationService.sendEmailNotification(
      createNotificationInput,
    );
  }

  @Mutation(() => SendNotificationResponse)
  sendSmsNotification(
    @Args('input')
    input: SendSmsInput,
  ): SendNotificationResponse {
    return this.notificationService.sendSmsNotification(input);
  }

  @Mutation(() => SendNotificationResponse)
  sendBulkSmsNotifications(
    @Args('input')
    input: SendSmsInput,
  ): SendNotificationResponse {
    return this.notificationService.sendBulkSmsNotification(input);
  }

  @Query(() => SendNotificationResponse)
  getEmailTemplates(
    @Args('input')
    input: SendSmsInput,
  ): Promise<SendNotificationResponse> {
    return this.notificationService.getEmailTemplates(input);
  }
}
