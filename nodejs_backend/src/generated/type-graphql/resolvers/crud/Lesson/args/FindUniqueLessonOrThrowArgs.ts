import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonWhereUniqueInput } from "../../../inputs/LessonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLessonOrThrowArgs {
  @TypeGraphQL.Field(_type => LessonWhereUniqueInput, {
    nullable: false
  })
  where!: LessonWhereUniqueInput;
}
