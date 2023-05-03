import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { LessonAvgOrderByAggregateInput } from "../inputs/LessonAvgOrderByAggregateInput";
import { LessonCountOrderByAggregateInput } from "../inputs/LessonCountOrderByAggregateInput";
import { LessonMaxOrderByAggregateInput } from "../inputs/LessonMaxOrderByAggregateInput";
import { LessonMinOrderByAggregateInput } from "../inputs/LessonMinOrderByAggregateInput";
import { LessonSumOrderByAggregateInput } from "../inputs/LessonSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LessonOrderByWithAggregationInput", {
  isAbstract: true
})
export class LessonOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lesson_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descriptionFull?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protectionDescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prevelance_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exploit_ability_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  impact_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LessonCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LessonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LessonAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LessonAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LessonMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LessonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LessonMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LessonMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LessonSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LessonSumOrderByAggregateInput | undefined;
}
