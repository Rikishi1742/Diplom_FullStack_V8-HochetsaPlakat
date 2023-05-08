import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { WrongAnswersTypeObjectEqualityInput } from "../inputs/WrongAnswersTypeObjectEqualityInput";

@TypeGraphQL.InputType("AnswerTypeObjectEqualityInput", {
  isAbstract: true
})
export class AnswerTypeObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  right_answer!: string;

  @TypeGraphQL.Field(_type => WrongAnswersTypeObjectEqualityInput, {
    nullable: false
  })
  wrong_answers!: WrongAnswersTypeObjectEqualityInput;
}
