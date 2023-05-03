import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonUpdateManyMutationInput } from "../../../inputs/LessonUpdateManyMutationInput";
import { LessonWhereInput } from "../../../inputs/LessonWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLessonArgs {
  @TypeGraphQL.Field(_type => LessonUpdateManyMutationInput, {
    nullable: false
  })
  data!: LessonUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LessonWhereInput, {
    nullable: true
  })
  where?: LessonWhereInput | undefined;
}
