import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Tests_id", {
  isAbstract: true
})
export class Tests_id {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t1?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t2?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t3?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t4?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  t5?: string | null;
}
