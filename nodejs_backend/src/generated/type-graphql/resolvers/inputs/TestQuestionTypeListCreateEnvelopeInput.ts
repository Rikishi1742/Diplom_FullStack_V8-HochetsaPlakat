import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeCreateInput } from "../inputs/TestQuestionTypeCreateInput";

@TypeGraphQL.InputType("TestQuestionTypeListCreateEnvelopeInput", {
  isAbstract: true
})
export class TestQuestionTypeListCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  set?: TestQuestionTypeCreateInput[] | undefined;
}
