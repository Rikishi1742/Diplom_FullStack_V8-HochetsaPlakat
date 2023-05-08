import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestOrderByWithAggregationInput } from "../../../inputs/TestOrderByWithAggregationInput";
import { TestScalarWhereWithAggregatesInput } from "../../../inputs/TestScalarWhereWithAggregatesInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";
import { TestScalarFieldEnum } from "../../../../enums/TestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTestArgs {
  @TypeGraphQL.Field(_type => TestWhereInput, {
    nullable: true
  })
  where?: TestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => TestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
