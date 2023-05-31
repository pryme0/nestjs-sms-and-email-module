import { InputType, Field, registerEnumType } from '@nestjs/graphql';

export enum SmsChannels {
  DND = 'dnd',
  WHATSAPP = 'whatsapp',
  GENERIC = 'generic',
}

registerEnumType(SmsChannels, {
  name: 'SmsChannels',
});

@InputType()
export class SendSmsInput {
  @Field({ nullable: true })
  from?: string;
  @Field(() => [String], { nullable: false })
  to: string | string[];
  @Field({ nullable: true })
  type: string;
  @Field(() => SmsChannels, { nullable: true })
  channel?: SmsChannels;
  @Field({ nullable: false })
  sms: string;
}
