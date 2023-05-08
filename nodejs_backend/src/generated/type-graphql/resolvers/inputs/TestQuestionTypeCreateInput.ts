import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeCreateInput } from "../inputs/AnswerTypeCreateInput";

@TypeGraphQL.InputType("TestQuestionTypeCreateInput", {
  isAbstract: true
})
export class TestQuestionTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => AnswerTypeCreateInput, {
    nullable: false
  })
  answer!: AnswerTypeCreateInput;
}
