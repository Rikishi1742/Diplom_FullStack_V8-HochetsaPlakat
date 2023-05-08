import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WrongAnswersTypeObjectEqualityInput", {
  isAbstract: true
})
export class WrongAnswersTypeObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw3?: string | undefined;
}
