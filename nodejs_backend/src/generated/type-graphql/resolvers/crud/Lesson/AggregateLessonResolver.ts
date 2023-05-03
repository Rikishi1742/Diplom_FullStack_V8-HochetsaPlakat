import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLessonArgs } from "./args/AggregateLessonArgs";
import { Lesson } from "../../../models/Lesson";
import { AggregateLesson } from "../../outputs/AggregateLesson";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lesson)
export class AggregateLessonResolver {
  @TypeGraphQL.Query(_returns => AggregateLesson, {
    nullable: false
  })
  async aggregateLesson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLessonArgs): Promise<AggregateLesson> {
    return getPrismaFromContext(ctx).lesson.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
