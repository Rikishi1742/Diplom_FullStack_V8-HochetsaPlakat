import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreatenumber_of_course_completedInput } from "../inputs/UserCreatenumber_of_course_completedInput";
import { UserCreaterolesInput } from "../inputs/UserCreaterolesInput";
import { UserPasswordTypeNullableCreateEnvelopeInput } from "../inputs/UserPasswordTypeNullableCreateEnvelopeInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => UserCreaterolesInput, {
    nullable: true
  })
  roles?: UserCreaterolesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => UserPasswordTypeNullableCreateEnvelopeInput, {
    nullable: true
  })
  password?: UserPasswordTypeNullableCreateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => UserCreatenumber_of_course_completedInput, {
    nullable: true
  })
  number_of_course_completed?: UserCreatenumber_of_course_completedInput | undefined;
}
