import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLessonArgs } from "./args/GroupByLessonArgs";
import { Lesson } from "../../../models/Lesson";
import { LessonGroupBy } from "../../outputs/LessonGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lesson)
export class GroupByLessonResolver {
  @TypeGraphQL.Query(_returns => [LessonGroupBy], {
    nullable: false
  })
  async groupByLesson(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLessonArgs): Promise<LessonGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lesson.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
