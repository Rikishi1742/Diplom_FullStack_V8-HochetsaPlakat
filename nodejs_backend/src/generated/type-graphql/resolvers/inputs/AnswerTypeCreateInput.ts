import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { WrongAnswersTypeCreateInput } from "../inputs/WrongAnswersTypeCreateInput";

@TypeGraphQL.InputType("AnswerTypeCreateInput", {
  isAbstract: true
})
export class AnswerTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  right_answer!: string;

  @TypeGraphQL.Field(_type => WrongAnswersTypeCreateInput, {
    nullable: false
  })
  wrong_answers!: WrongAnswersTypeCreateInput;
}
