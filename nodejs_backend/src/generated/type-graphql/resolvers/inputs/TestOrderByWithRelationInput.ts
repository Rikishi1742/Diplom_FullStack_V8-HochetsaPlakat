import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeOrderByCompositeAggregateInput } from "../inputs/TestQuestionTypeOrderByCompositeAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TestOrderByWithRelationInput", {
  isAbstract: true
})
export class TestOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeOrderByCompositeAggregateInput, {
    nullable: true
  })
  question?: TestQuestionTypeOrderByCompositeAggregateInput | undefined;
}
