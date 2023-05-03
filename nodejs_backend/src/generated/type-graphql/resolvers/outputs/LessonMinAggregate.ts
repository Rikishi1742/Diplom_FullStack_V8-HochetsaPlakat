import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("LessonMinAggregate", {
  isAbstract: true
})
export class LessonMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lesson_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descriptionFull!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  protectionDescription!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  prevelance_level!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  exploit_ability_level!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  impact_level!: number | null;
}
