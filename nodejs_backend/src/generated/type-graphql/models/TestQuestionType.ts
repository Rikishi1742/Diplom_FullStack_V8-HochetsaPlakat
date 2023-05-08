import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { AnswerType } from "../models/AnswerType";

@TypeGraphQL.ObjectType("TestQuestionType", {
  isAbstract: true
})
export class TestQuestionType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => AnswerType, {
    nullable: false
  })
  answer!: AnswerType;
}
