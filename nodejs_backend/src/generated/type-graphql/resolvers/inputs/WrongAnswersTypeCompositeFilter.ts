import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { WrongAnswersTypeObjectEqualityInput } from "../inputs/WrongAnswersTypeObjectEqualityInput";
import { WrongAnswersTypeWhereInput } from "../inputs/WrongAnswersTypeWhereInput";

@TypeGraphQL.InputType("WrongAnswersTypeCompositeFilter", {
  isAbstract: true
})
export class WrongAnswersTypeCompositeFilter {
  @TypeGraphQL.Field(_type => WrongAnswersTypeObjectEqualityInput, {
    nullable: true
  })
  equals?: WrongAnswersTypeObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => WrongAnswersTypeWhereInput, {
    nullable: true
  })
  is?: WrongAnswersTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => WrongAnswersTypeWhereInput, {
    nullable: true
  })
  isNot?: WrongAnswersTypeWhereInput | undefined;
}
