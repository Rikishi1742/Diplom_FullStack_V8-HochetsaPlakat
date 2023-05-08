import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TestQuestionTypeObjectEqualityInput } from "../inputs/TestQuestionTypeObjectEqualityInput";

@TypeGraphQL.InputType("TestWhereInput", {
  isAbstract: true
})
export class TestWhereInput {
  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true
  })
  AND?: TestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true
  })
  OR?: TestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true
  })
  NOT?: TestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => [TestQuestionTypeObjectEqualityInput], {
    nullable: true
  })
  question?: TestQuestionTypeObjectEqualityInput[] | undefined;
}
