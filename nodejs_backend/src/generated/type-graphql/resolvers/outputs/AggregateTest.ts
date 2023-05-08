import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestCountAggregate } from "../outputs/TestCountAggregate";
import { TestMaxAggregate } from "../outputs/TestMaxAggregate";
import { TestMinAggregate } from "../outputs/TestMinAggregate";

@TypeGraphQL.ObjectType("AggregateTest", {
  isAbstract: true
})
export class AggregateTest {
  @TypeGraphQL.Field(_type => TestCountAggregate, {
    nullable: true
  })
  _count!: TestCountAggregate | null;

  @TypeGraphQL.Field(_type => TestMinAggregate, {
    nullable: true
  })
  _min!: TestMinAggregate | null;

  @TypeGraphQL.Field(_type => TestMaxAggregate, {
    nullable: true
  })
  _max!: TestMaxAggregate | null;
}
