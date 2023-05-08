import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestUpdateInput } from "../../../inputs/TestUpdateInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTestArgs {
  @TypeGraphQL.Field(_type => TestUpdateInput, {
    nullable: false
  })
  data!: TestUpdateInput;

  @TypeGraphQL.Field(_type => TestWhereUniqueInput, {
    nullable: false
  })
  where!: TestWhereUniqueInput;
}
