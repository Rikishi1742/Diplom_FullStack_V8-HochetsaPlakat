import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeCreateInput } from "../inputs/AnswerTypeCreateInput";
import { AnswerTypeUpdateInput } from "../inputs/AnswerTypeUpdateInput";

@TypeGraphQL.InputType("AnswerTypeUpdateEnvelopeInput", {
  isAbstract: true
})
export class AnswerTypeUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => AnswerTypeCreateInput, {
    nullable: true
  })
  set?: AnswerTypeCreateInput | undefined;

  @TypeGraphQL.Field(_type => AnswerTypeUpdateInput, {
    nullable: true
  })
  update?: AnswerTypeUpdateInput | undefined;
}
