import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonUpdateInput } from "../../../inputs/LessonUpdateInput";
import { LessonWhereUniqueInput } from "../../../inputs/LessonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLessonArgs {
  @TypeGraphQL.Field(_type => LessonUpdateInput, {
    nullable: false
  })
  data!: LessonUpdateInput;

  @TypeGraphQL.Field(_type => LessonWhereUniqueInput, {
    nullable: false
  })
  where!: LessonWhereUniqueInput;
}
