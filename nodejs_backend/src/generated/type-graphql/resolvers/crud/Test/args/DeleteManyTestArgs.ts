import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestWhereInput } from "../../../inputs/TestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTestArgs {
  @TypeGraphQL.Field(_type => TestWhereInput, {
    nullable: true
  })
  where?: TestWhereInput | undefined;
}
