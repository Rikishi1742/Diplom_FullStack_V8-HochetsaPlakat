import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeUpdateEnvelopeInput } from "../inputs/AnswerTypeUpdateEnvelopeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TestQuestionTypeUpdateInput", {
  isAbstract: true
})
export class TestQuestionTypeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  question_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AnswerTypeUpdateEnvelopeInput, {
    nullable: true
  })
  answer?: AnswerTypeUpdateEnvelopeInput | undefined;
}
