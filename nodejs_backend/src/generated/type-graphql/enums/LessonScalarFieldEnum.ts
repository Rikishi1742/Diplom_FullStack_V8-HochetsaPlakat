import * as TypeGraphQL from "type-graphql";

export enum LessonScalarFieldEnum {
  lesson_id = "lesson_id",
  name = "name",
  description = "description",
  descriptionFull = "descriptionFull",
  protectionDescription = "protectionDescription",
  prevelance_level = "prevelance_level",
  exploit_ability_level = "exploit_ability_level",
  impact_level = "impact_level"
}
TypeGraphQL.registerEnumType(LessonScalarFieldEnum, {
  name: "LessonScalarFieldEnum",
  description: undefined,
});
