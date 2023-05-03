import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonOrderByWithAggregationInput } from "../../../inputs/LessonOrderByWithAggregationInput";
import { LessonScalarWhereWithAggregatesInput } from "../../../inputs/LessonScalarWhereWithAggregatesInput";
import { LessonWhereInput } from "../../../inputs/LessonWhereInput";
import { LessonScalarFieldEnum } from "../../../../enums/LessonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLessonArgs {
  @TypeGraphQL.Field(_type => LessonWhereInput, {
    nullable: true
  })
  where?: LessonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LessonOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LessonOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LessonScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"lesson_id" | "name" | "description" | "descriptionFull" | "protectionDescription" | "prevelance_level" | "exploit_ability_level" | "impact_level">;

  @TypeGraphQL.Field(_type => LessonScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LessonScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
