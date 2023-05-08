import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestCreateInput } from "../../../inputs/TestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTestArgs {
  @TypeGraphQL.Field(_type => TestCreateInput, {
    nullable: false
  })
  data!: TestCreateInput;
}
