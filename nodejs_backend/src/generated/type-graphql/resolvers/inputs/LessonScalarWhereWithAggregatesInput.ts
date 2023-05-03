import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LessonScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LessonScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LessonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LessonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LessonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LessonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LessonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LessonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lesson_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  descriptionFull?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  protectionDescription?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  prevelance_level?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  exploit_ability_level?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  impact_level?: IntWithAggregatesFilter | undefined;
}
