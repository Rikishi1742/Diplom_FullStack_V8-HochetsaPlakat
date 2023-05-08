import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Tests_idCreateInput } from "../inputs/Tests_idCreateInput";

@TypeGraphQL.InputType("Tests_idCreateEnvelopeInput", {
  isAbstract: true
})
export class Tests_idCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => Tests_idCreateInput, {
    nullable: true
  })
  set?: Tests_idCreateInput | undefined;
}
