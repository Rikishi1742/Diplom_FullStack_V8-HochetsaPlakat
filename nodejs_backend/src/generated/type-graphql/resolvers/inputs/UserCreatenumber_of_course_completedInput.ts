import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserCreatenumber_of_course_completedInput", {
  isAbstract: true
})
export class UserCreatenumber_of_course_completedInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  set!: string[];
}
