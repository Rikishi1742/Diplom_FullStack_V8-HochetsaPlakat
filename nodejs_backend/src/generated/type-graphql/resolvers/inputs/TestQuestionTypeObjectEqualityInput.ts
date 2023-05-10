import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeObjectEqualityInput } from "../inputs/AnswerTypeObjectEqualityInput";

@TypeGraphQL.InputType("TestQuestionTypeObjectEqualityInput", {
  isAbstract: true
})
export class TestQuestionTypeObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question_name!: string;

  @TypeGraphQL.Field(_type => AnswerTypeObjectEqualityInput, {
    nullable: false
  })
  answer!: AnswerTypeObjectEqualityInput;
}
