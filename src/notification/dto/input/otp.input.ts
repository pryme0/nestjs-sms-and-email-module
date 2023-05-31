import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendSmsOtpInput {
  @Field({ nullable: false })
  sms: string;
  @Field({ nullable: false })
  to: string;
  @Field({ nullable: true })
  from?: string;
}

@InputType()
export class SendEmailOtpInput {
  @Field({ nullable: false })
  msg: string;
  @Field({ nullable: false })
  subject: string;
  @Field({ nullable: true })
  from?: string;
  @Field({ nullable: false })
  to: string;
  @Field({ nullable: true })
  first_name?: string;
}

@InputType()
export class ValidateOtpInput {
  @Field({ nullable: false })
  otpCode: string;
}
