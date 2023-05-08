import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeCreateInput } from "../inputs/TestQuestionTypeCreateInput";

@TypeGraphQL.InputType("TestCreateManyInput", {
  isAbstract: true
})
export class TestCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  question?: TestQuestionTypeCreateInput[] | undefined;
}
