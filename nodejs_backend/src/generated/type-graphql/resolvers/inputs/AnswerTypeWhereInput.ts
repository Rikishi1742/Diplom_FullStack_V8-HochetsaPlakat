import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { WrongAnswersTypeCompositeFilter } from "../inputs/WrongAnswersTypeCompositeFilter";

@TypeGraphQL.InputType("AnswerTypeWhereInput", {
  isAbstract: true
})
export class AnswerTypeWhereInput {
  @TypeGraphQL.Field(_type => [AnswerTypeWhereInput], {
    nullable: true
  })
  AND?: AnswerTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerTypeWhereInput], {
    nullable: true
  })
  OR?: AnswerTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnswerTypeWhereInput], {
    nullable: true
  })
  NOT?: AnswerTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  right_answer?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WrongAnswersTypeCompositeFilter, {
    nullable: true
  })
  wrong_answers?: WrongAnswersTypeCompositeFilter | undefined;
}
