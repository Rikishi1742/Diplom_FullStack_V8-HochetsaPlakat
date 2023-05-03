import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonCreateManyInput } from "../../../inputs/LessonCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLessonArgs {
  @TypeGraphQL.Field(_type => [LessonCreateManyInput], {
    nullable: false
  })
  data!: LessonCreateManyInput[];
}
