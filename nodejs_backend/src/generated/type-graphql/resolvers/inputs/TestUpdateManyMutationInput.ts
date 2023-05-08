import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeCreateInput } from "../inputs/TestQuestionTypeCreateInput";

@TypeGraphQL.InputType("TestUpdateManyMutationInput", {
  isAbstract: true
})
export class TestUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  question?: TestQuestionTypeCreateInput[] | undefined;
}
