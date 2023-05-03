import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { LessonAvgAggregate } from "../outputs/LessonAvgAggregate";
import { LessonCountAggregate } from "../outputs/LessonCountAggregate";
import { LessonMaxAggregate } from "../outputs/LessonMaxAggregate";
import { LessonMinAggregate } from "../outputs/LessonMinAggregate";
import { LessonSumAggregate } from "../outputs/LessonSumAggregate";

@TypeGraphQL.ObjectType("LessonGroupBy", {
  isAbstract: true
})
export class LessonGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lesson_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descriptionFull!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  protectionDescription!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  prevelance_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exploit_ability_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  impact_level!: number;

  @TypeGraphQL.Field(_type => LessonCountAggregate, {
    nullable: true
  })
  _count!: LessonCountAggregate | null;

  @TypeGraphQL.Field(_type => LessonAvgAggregate, {
    nullable: true
  })
  _avg!: LessonAvgAggregate | null;

  @TypeGraphQL.Field(_type => LessonSumAggregate, {
    nullable: true
  })
  _sum!: LessonSumAggregate | null;

  @TypeGraphQL.Field(_type => LessonMinAggregate, {
    nullable: true
  })
  _min!: LessonMinAggregate | null;

  @TypeGraphQL.Field(_type => LessonMaxAggregate, {
    nullable: true
  })
  _max!: LessonMaxAggregate | null;
}
