import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("WrongAnswersType", {
  isAbstract: true
})
export class WrongAnswersType {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw1?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw2?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  asw3?: string | null;
}
