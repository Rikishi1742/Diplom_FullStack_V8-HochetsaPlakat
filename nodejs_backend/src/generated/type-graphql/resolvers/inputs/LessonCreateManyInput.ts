import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Tests_idCreateEnvelopeInput } from "../inputs/Tests_idCreateEnvelopeInput";

@TypeGraphQL.InputType("LessonCreateManyInput", {
  isAbstract: true
})
export class LessonCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lesson_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descriptionFull!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  protectionDescription!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  prevelance_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exploit_ability_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  impact_level!: number;

  @TypeGraphQL.Field(_type => Tests_idCreateEnvelopeInput, {
    nullable: false
  })
  tests_id!: Tests_idCreateEnvelopeInput;
}
