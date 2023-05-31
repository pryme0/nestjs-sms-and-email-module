import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Notification {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
