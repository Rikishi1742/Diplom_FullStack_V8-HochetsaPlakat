import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { WrongAnswersType } from "../models/WrongAnswersType";

@TypeGraphQL.ObjectType("AnswerType", {
  isAbstract: true
})
export class AnswerType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  right_answer!: string;

  @TypeGraphQL.Field(_type => WrongAnswersType, {
    nullable: false
  })
  wrong_answers!: WrongAnswersType;
}
