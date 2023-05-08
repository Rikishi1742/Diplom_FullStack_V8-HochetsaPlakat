import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Tests_idObjectEqualityInput } from "../inputs/Tests_idObjectEqualityInput";
import { Tests_idWhereInput } from "../inputs/Tests_idWhereInput";

@TypeGraphQL.InputType("Tests_idCompositeFilter", {
  isAbstract: true
})
export class Tests_idCompositeFilter {
  @TypeGraphQL.Field(_type => Tests_idObjectEqualityInput, {
    nullable: true
  })
  equals?: Tests_idObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => Tests_idWhereInput, {
    nullable: true
  })
  is?: Tests_idWhereInput | undefined;

  @TypeGraphQL.Field(_type => Tests_idWhereInput, {
    nullable: true
  })
  isNot?: Tests_idWhereInput | undefined;
}
