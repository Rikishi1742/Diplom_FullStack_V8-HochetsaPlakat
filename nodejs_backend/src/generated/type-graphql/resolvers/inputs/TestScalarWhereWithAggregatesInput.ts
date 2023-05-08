import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TestScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
