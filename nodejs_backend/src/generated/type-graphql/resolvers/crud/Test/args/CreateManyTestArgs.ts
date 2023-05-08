import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestCreateManyInput } from "../../../inputs/TestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTestArgs {
  @TypeGraphQL.Field(_type => [TestCreateManyInput], {
    nullable: false
  })
  data!: TestCreateManyInput[];
}
