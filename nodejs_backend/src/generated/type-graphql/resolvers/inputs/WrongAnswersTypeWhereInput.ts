import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("WrongAnswersTypeWhereInput", {
  isAbstract: true
})
export class WrongAnswersTypeWhereInput {
  @TypeGraphQL.Field(_type => [WrongAnswersTypeWhereInput], {
    nullable: true
  })
  AND?: WrongAnswersTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WrongAnswersTypeWhereInput], {
    nullable: true
  })
  OR?: WrongAnswersTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WrongAnswersTypeWhereInput], {
    nullable: true
  })
  NOT?: WrongAnswersTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  asw1?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  asw2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  asw3?: StringNullableFilter | undefined;
}
