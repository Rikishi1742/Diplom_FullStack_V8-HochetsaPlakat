import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Tests_idWhereInput", {
  isAbstract: true
})
export class Tests_idWhereInput {
  @TypeGraphQL.Field(_type => [Tests_idWhereInput], {
    nullable: true
  })
  AND?: Tests_idWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tests_idWhereInput], {
    nullable: true
  })
  OR?: Tests_idWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tests_idWhereInput], {
    nullable: true
  })
  NOT?: Tests_idWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  t1?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  t2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  t3?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  t4?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  t5?: StringNullableFilter | undefined;
}
