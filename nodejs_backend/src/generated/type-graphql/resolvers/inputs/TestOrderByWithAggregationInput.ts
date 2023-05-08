import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestCountOrderByAggregateInput } from "../inputs/TestCountOrderByAggregateInput";
import { TestMaxOrderByAggregateInput } from "../inputs/TestMaxOrderByAggregateInput";
import { TestMinOrderByAggregateInput } from "../inputs/TestMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TestOrderByWithAggregationInput", {
  isAbstract: true
})
export class TestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TestMinOrderByAggregateInput | undefined;
}
