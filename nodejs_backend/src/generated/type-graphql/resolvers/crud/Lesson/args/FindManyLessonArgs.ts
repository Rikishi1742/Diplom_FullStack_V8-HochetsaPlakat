import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LessonOrderByWithRelationInput } from "../../../inputs/LessonOrderByWithRelationInput";
import { LessonWhereInput } from "../../../inputs/LessonWhereInput";
import { LessonWhereUniqueInput } from "../../../inputs/LessonWhereUniqueInput";
import { LessonScalarFieldEnum } from "../../../../enums/LessonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLessonArgs {
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

  @TypeGraphQL.Field(_type => [LessonScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"lesson_id" | "name" | "description" | "descriptionFull" | "protectionDescription" | "prevelance_level" | "exploit_ability_level" | "impact_level"> | undefined;
}
