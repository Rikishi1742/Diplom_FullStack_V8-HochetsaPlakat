import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserPasswordTypeNullableUpdateEnvelopeInput } from "../inputs/UserPasswordTypeNullableUpdateEnvelopeInput";
import { UserUpdatenumber_of_course_completedInput } from "../inputs/UserUpdatenumber_of_course_completedInput";
import { UserUpdaterolesInput } from "../inputs/UserUpdaterolesInput";

@TypeGraphQL.InputType("UserUpdateManyMutationInput", {
  isAbstract: true
})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdaterolesInput, {
    nullable: true
  })
  roles?: UserUpdaterolesInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserPasswordTypeNullableUpdateEnvelopeInput, {
    nullable: true
  })
  password?: UserPasswordTypeNullableUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdatenumber_of_course_completedInput, {
    nullable: true
  })
  number_of_course_completed?: UserUpdatenumber_of_course_completedInput | undefined;
}
