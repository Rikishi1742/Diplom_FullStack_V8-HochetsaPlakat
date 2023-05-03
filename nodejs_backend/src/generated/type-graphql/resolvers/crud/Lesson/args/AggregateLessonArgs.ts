import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonOrderByWithRelationInput } from "../../../inputs/LessonOrderByWithRelationInput";
import { LessonWhereInput } from "../../../inputs/LessonWhereInput";
import { LessonWhereUniqueInput } from "../../../inputs/LessonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLessonArgs {
  @TypeGraphQL.Field(_type => LessonWhereInput, {
    nullable: true
  })
  where?: LessonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LessonOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LessonOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LessonWhereUniqueInput, {
    nullable: true
  })
  cursor?: LessonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
