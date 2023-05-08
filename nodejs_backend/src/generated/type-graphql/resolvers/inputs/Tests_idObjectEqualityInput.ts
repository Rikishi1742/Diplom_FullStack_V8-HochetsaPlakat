import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Tests_idObjectEqualityInput", {
  isAbstract: true
})
export class Tests_idObjectEqualityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t5?: string | undefined;
}
