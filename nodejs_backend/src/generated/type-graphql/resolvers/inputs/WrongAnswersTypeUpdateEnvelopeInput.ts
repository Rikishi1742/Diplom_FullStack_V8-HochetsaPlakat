import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { WrongAnswersTypeCreateInput } from "../inputs/WrongAnswersTypeCreateInput";
import { WrongAnswersTypeUpdateInput } from "../inputs/WrongAnswersTypeUpdateInput";

@TypeGraphQL.InputType("WrongAnswersTypeUpdateEnvelopeInput", {
  isAbstract: true
})
export class WrongAnswersTypeUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => WrongAnswersTypeCreateInput, {
    nullable: true
  })
  set?: WrongAnswersTypeCreateInput | undefined;

  @TypeGraphQL.Field(_type => WrongAnswersTypeUpdateInput, {
    nullable: true
  })
  update?: WrongAnswersTypeUpdateInput | undefined;
}
