import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Tests_idCreateInput } from "../inputs/Tests_idCreateInput";
import { Tests_idUpdateInput } from "../inputs/Tests_idUpdateInput";

@TypeGraphQL.InputType("Tests_idUpdateEnvelopeInput", {
  isAbstract: true
})
export class Tests_idUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => Tests_idCreateInput, {
    nullable: true
  })
  set?: Tests_idCreateInput | undefined;

  @TypeGraphQL.Field(_type => Tests_idUpdateInput, {
    nullable: true
  })
  update?: Tests_idUpdateInput | undefined;
}
