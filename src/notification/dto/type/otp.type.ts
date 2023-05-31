import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SendNotificationResponse {
  @Field({ nullable: true })
  message?: string;
}

@ObjectType()
export class ValidateOtpResponse {
  @Field({ nullable: true })
  verified?: boolean;
}
