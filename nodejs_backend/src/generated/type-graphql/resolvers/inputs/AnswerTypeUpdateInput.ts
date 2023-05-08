import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WrongAnswersTypeUpdateEnvelopeInput } from "../inputs/WrongAnswersTypeUpdateEnvelopeInput";

@TypeGraphQL.InputType("AnswerTypeUpdateInput", {
  isAbstract: true
})
export class AnswerTypeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  right_answer?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WrongAnswersTypeUpdateEnvelopeInput, {
    nullable: true
  })
  wrong_answers?: WrongAnswersTypeUpdateEnvelopeInput | undefined;
}
