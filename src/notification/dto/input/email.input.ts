import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BaseMailchimpInput {
  @Field()
  key?: string;
  @Field()
  send_At?: string;
}

@InputType()
export class BaseMailChimpEmailContentInput {
  @Field()
  name: string;
  @Field()
  content: string;
}

@InputType()
export class MailChimpAttachmentInput extends BaseMailChimpEmailContentInput {
  @Field()
  type: string;
}

@InputType()
export class MailChimpToInput {
  @Field()
  email: string;
}

@InputType()
export class MailChimpMessageInput {
  @Field(() => [MailChimpToInput])
  to: MailChimpToInput[] | MailChimpToInput;

  @Field()
  text?: string;

  @Field()
  subject?: string;

  @Field()
  from_email: string;

  @Field()
  template?: string;

  @Field()
  from_name?: string;

  @Field(() => MailChimpAttachmentInput)
  attachements?: MailChimpAttachmentInput;

  @Field(() => MailChimpAttachmentInput)
  image?: MailChimpAttachmentInput;

  @Field()
  important?: boolean;

  @Field()
  auto_text?: boolean;

  @Field(() => [String])
  tags?: string[];

  @Field()
  track_opens?: boolean;

  @Field()
  track_clicks?: boolean;
}

@InputType()
export class MailChimpEmailInput extends BaseMailchimpInput {
  @Field(() => [MailChimpMessageInput])
  message: MailChimpMessageInput[];
}

@InputType()
export class MailChimpTemplateEmailInterface extends BaseMailchimpInput {
  @Field(() => [MailChimpMessageInput])
  message: MailChimpMessageInput[];

  @Field()
  template_name: string;

  @Field(() => [BaseMailChimpEmailContentInput])
  template_content: BaseMailChimpEmailContentInput[];

  @Field()
  async?: boolean;
}
