import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerTypeObjectEqualityInput } from "../inputs/AnswerTypeObjectEqualityInput";
import { AnswerTypeWhereInput } from "../inputs/AnswerTypeWhereInput";

@TypeGraphQL.InputType("AnswerTypeCompositeFilter", {
  isAbstract: true
})
export class AnswerTypeCompositeFilter {
  @TypeGraphQL.Field(_type => AnswerTypeObjectEqualityInput, {
    nullable: true
  })
  equals?: AnswerTypeObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => AnswerTypeWhereInput, {
    nullable: true
  })
  is?: AnswerTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnswerTypeWhereInput, {
    nullable: true
  })
  isNot?: AnswerTypeWhereInput | undefined;
}
