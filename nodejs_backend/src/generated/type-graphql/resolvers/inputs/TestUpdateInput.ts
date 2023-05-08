import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeCreateInput } from "../inputs/TestQuestionTypeCreateInput";

@TypeGraphQL.InputType("TestUpdateInput", {
  isAbstract: true
})
export class TestUpdateInput {
  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  question?: TestQuestionTypeCreateInput[] | undefined;
}
