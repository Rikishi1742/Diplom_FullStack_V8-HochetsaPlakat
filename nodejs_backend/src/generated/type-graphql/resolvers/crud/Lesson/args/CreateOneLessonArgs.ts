import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonCreateInput } from "../../../inputs/LessonCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLessonArgs {
  @TypeGraphQL.Field(_type => LessonCreateInput, {
    nullable: false
  })
  data!: LessonCreateInput;
}
