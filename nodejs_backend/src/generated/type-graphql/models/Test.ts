import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { TestQuestionType } from "../models/TestQuestionType";

@TypeGraphQL.ObjectType("Test", {
  isAbstract: true
})
export class Test {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [TestQuestionType], {
    nullable: false
  })
  question!: TestQuestionType[];
}
