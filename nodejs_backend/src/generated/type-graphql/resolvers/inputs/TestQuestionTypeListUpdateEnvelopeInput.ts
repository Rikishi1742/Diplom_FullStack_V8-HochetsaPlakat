import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeCreateInput } from "../inputs/TestQuestionTypeCreateInput";
import { TestQuestionTypeDeleteManyInput } from "../inputs/TestQuestionTypeDeleteManyInput";
import { TestQuestionTypeUpdateManyInput } from "../inputs/TestQuestionTypeUpdateManyInput";

@TypeGraphQL.InputType("TestQuestionTypeListUpdateEnvelopeInput", {
  isAbstract: true
})
export class TestQuestionTypeListUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  set?: TestQuestionTypeCreateInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestQuestionTypeCreateInput], {
    nullable: true
  })
  push?: TestQuestionTypeCreateInput[] | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeUpdateManyInput, {
    nullable: true
  })
  updateMany?: TestQuestionTypeUpdateManyInput | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeDeleteManyInput, {
    nullable: true
  })
  deleteMany?: TestQuestionTypeDeleteManyInput | undefined;
}
