import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TestQuestionTypeObjectEqualityInput } from "../inputs/TestQuestionTypeObjectEqualityInput";
import { TestQuestionTypeWhereInput } from "../inputs/TestQuestionTypeWhereInput";

@TypeGraphQL.InputType("TestQuestionTypeCompositeListFilter", {
  isAbstract: true
})
export class TestQuestionTypeCompositeListFilter {
  @TypeGraphQL.Field(_type => [TestQuestionTypeObjectEqualityInput], {
    nullable: true
  })
  equals?: TestQuestionTypeObjectEqualityInput[] | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeWhereInput, {
    nullable: true
  })
  every?: TestQuestionTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeWhereInput, {
    nullable: true
  })
  some?: TestQuestionTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TestQuestionTypeWhereInput, {
    nullable: true
  })
  none?: TestQuestionTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
