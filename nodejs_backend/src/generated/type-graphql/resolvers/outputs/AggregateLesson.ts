import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { LessonAvgAggregate } from "../outputs/LessonAvgAggregate";
import { LessonCountAggregate } from "../outputs/LessonCountAggregate";
import { LessonMaxAggregate } from "../outputs/LessonMaxAggregate";
import { LessonMinAggregate } from "../outputs/LessonMinAggregate";
import { LessonSumAggregate } from "../outputs/LessonSumAggregate";

@TypeGraphQL.ObjectType("AggregateLesson", {
  isAbstract: true
})
export class AggregateLesson {
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
