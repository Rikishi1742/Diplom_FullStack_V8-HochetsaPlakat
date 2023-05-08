import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeWhereInput } from "../inputs/TestQuestionTypeWhereInput";

@TypeGraphQL.InputType("TestQuestionTypeDeleteManyInput", {
  isAbstract: true
})
export class TestQuestionTypeDeleteManyInput {
  @TypeGraphQL.Field(_type => TestQuestionTypeWhereInput, {
    nullable: false
  })
  where!: TestQuestionTypeWhereInput;
}
