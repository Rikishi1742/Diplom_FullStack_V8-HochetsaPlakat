import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonWhereInput } from "../../../inputs/LessonWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLessonArgs {
  @TypeGraphQL.Field(_type => LessonWhereInput, {
    nullable: true
  })
  where?: LessonWhereInput | undefined;
}
