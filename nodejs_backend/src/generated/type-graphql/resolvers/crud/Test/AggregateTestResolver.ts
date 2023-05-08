import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTestArgs } from "./args/AggregateTestArgs";
import { Test } from "../../../models/Test";
import { AggregateTest } from "../../outputs/AggregateTest";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Test)
export class AggregateTestResolver {
  @TypeGraphQL.Query(_returns => AggregateTest, {
    nullable: false
  })
  async aggregateTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTestArgs): Promise<AggregateTest> {
    return getPrismaFromContext(ctx).test.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
