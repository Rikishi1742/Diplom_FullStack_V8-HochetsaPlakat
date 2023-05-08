import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeUpdateInput } from "../inputs/TestQuestionTypeUpdateInput";
import { TestQuestionTypeWhereInput } from "../inputs/TestQuestionTypeWhereInput";

@TypeGraphQL.InputType("TestQuestionTypeUpdateManyInput", {
  isAbstract: true
})
export class TestQuestionTypeUpdateManyInput {
  @TypeGraphQL.Field(_type => TestQuestionTypeWhereInput, {
    nullable: false
  })
  where!: TestQuestionTypeWhereInput;

  @TypeGraphQL.Field(_type => TestQuestionTypeUpdateInput, {
    nullable: false
  })
  data!: TestQuestionTypeUpdateInput;
}
