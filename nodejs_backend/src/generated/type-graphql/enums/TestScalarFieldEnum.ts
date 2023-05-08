import * as TypeGraphQL from "type-graphql";

export enum TestScalarFieldEnum {
  id = "id"
}
TypeGraphQL.registerEnumType(TestScalarFieldEnum, {
  name: "TestScalarFieldEnum",
  description: undefined,
});
