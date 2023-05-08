import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTestOrThrowArgs {
  @TypeGraphQL.Field(_type => TestWhereUniqueInput, {
    nullable: false
  })
  where!: TestWhereUniqueInput;
}
