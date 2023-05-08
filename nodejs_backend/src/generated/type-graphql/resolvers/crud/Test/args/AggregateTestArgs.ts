import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TestOrderByWithRelationInput } from "../../../inputs/TestOrderByWithRelationInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTestArgs {
  @TypeGraphQL.Field(_type => TestWhereInput, {
    nullable: true
  })
  where?: TestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TestWhereUniqueInput, {
    nullable: true
  })
  cursor?: TestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
