import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("LessonWhereUniqueInput", {
  isAbstract: true
})
export class LessonWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lesson_id?: string | undefined;
}
