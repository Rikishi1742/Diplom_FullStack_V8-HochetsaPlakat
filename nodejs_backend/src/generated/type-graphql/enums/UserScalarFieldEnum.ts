import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  username = "username",
  roles = "roles",
  email = "email",
  name = "name",
  number_of_course_completed = "number_of_course_completed"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
