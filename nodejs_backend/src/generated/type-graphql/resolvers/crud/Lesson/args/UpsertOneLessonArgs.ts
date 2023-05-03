import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonCreateInput } from "../../../inputs/LessonCreateInput";
import { LessonUpdateInput } from "../../../inputs/LessonUpdateInput";
import { LessonWhereUniqueInput } from "../../../inputs/LessonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLessonArgs {
  @TypeGraphQL.Field(_type => LessonWhereUniqueInput, {
    nullable: false
  })
  where!: LessonWhereUniqueInput;

  @TypeGraphQL.Field(_type => LessonCreateInput, {
    nullable: false
  })
  create!: LessonCreateInput;

  @TypeGraphQL.Field(_type => LessonUpdateInput, {
    nullable: false
  })
  update!: LessonUpdateInput;
}
