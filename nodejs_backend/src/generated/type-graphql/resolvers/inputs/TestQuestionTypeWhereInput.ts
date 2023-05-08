import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeCompositeFilter } from "../inputs/AnswerTypeCompositeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TestQuestionTypeWhereInput", {
  isAbstract: true
})
export class TestQuestionTypeWhereInput {
  @TypeGraphQL.Field(_type => [TestQuestionTypeWhereInput], {
    nullable: true
  })
  AND?: TestQuestionTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestQuestionTypeWhereInput], {
    nullable: true
  })
  OR?: TestQuestionTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestQuestionTypeWhereInput], {
    nullable: true
  })
  NOT?: TestQuestionTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  question?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AnswerTypeCompositeFilter, {
    nullable: true
  })
  answer?: AnswerTypeCompositeFilter | undefined;
}
