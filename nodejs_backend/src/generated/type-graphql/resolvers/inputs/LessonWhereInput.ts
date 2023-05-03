import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LessonWhereInput", {
  isAbstract: true
})
export class LessonWhereInput {
  @TypeGraphQL.Field(_type => [LessonWhereInput], {
    nullable: true
  })
  AND?: LessonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LessonWhereInput], {
    nullable: true
  })
  OR?: LessonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LessonWhereInput], {
    nullable: true
  })
  NOT?: LessonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lesson_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descriptionFull?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  protectionDescription?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  prevelance_level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  exploit_ability_level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  impact_level?: IntFilter | undefined;
}
