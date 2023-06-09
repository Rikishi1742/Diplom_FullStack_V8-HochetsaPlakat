import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserRefreshToken: crudResolvers.UserRefreshTokenCrudResolver,
  Lesson: crudResolvers.LessonCrudResolver,
  Test: crudResolvers.TestCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  UserRefreshToken: {
    aggregateUserRefreshToken: actionResolvers.AggregateUserRefreshTokenResolver,
    createManyUserRefreshToken: actionResolvers.CreateManyUserRefreshTokenResolver,
    createOneUserRefreshToken: actionResolvers.CreateOneUserRefreshTokenResolver,
    deleteManyUserRefreshToken: actionResolvers.DeleteManyUserRefreshTokenResolver,
    deleteOneUserRefreshToken: actionResolvers.DeleteOneUserRefreshTokenResolver,
    findFirstUserRefreshToken: actionResolvers.FindFirstUserRefreshTokenResolver,
    findFirstUserRefreshTokenOrThrow: actionResolvers.FindFirstUserRefreshTokenOrThrowResolver,
    userRefreshTokens: actionResolvers.FindManyUserRefreshTokenResolver,
    userRefreshToken: actionResolvers.FindUniqueUserRefreshTokenResolver,
    getUserRefreshToken: actionResolvers.FindUniqueUserRefreshTokenOrThrowResolver,
    groupByUserRefreshToken: actionResolvers.GroupByUserRefreshTokenResolver,
    updateManyUserRefreshToken: actionResolvers.UpdateManyUserRefreshTokenResolver,
    updateOneUserRefreshToken: actionResolvers.UpdateOneUserRefreshTokenResolver,
    upsertOneUserRefreshToken: actionResolvers.UpsertOneUserRefreshTokenResolver
  },
  Lesson: {
    aggregateLesson: actionResolvers.AggregateLessonResolver,
    createManyLesson: actionResolvers.CreateManyLessonResolver,
    createOneLesson: actionResolvers.CreateOneLessonResolver,
    deleteManyLesson: actionResolvers.DeleteManyLessonResolver,
    deleteOneLesson: actionResolvers.DeleteOneLessonResolver,
    findFirstLesson: actionResolvers.FindFirstLessonResolver,
    findFirstLessonOrThrow: actionResolvers.FindFirstLessonOrThrowResolver,
    lessons: actionResolvers.FindManyLessonResolver,
    lesson: actionResolvers.FindUniqueLessonResolver,
    getLesson: actionResolvers.FindUniqueLessonOrThrowResolver,
    groupByLesson: actionResolvers.GroupByLessonResolver,
    updateManyLesson: actionResolvers.UpdateManyLessonResolver,
    updateOneLesson: actionResolvers.UpdateOneLessonResolver,
    upsertOneLesson: actionResolvers.UpsertOneLessonResolver
  },
  Test: {
    aggregateTest: actionResolvers.AggregateTestResolver,
    createManyTest: actionResolvers.CreateManyTestResolver,
    createOneTest: actionResolvers.CreateOneTestResolver,
    deleteManyTest: actionResolvers.DeleteManyTestResolver,
    deleteOneTest: actionResolvers.DeleteOneTestResolver,
    findFirstTest: actionResolvers.FindFirstTestResolver,
    findFirstTestOrThrow: actionResolvers.FindFirstTestOrThrowResolver,
    tests: actionResolvers.FindManyTestResolver,
    test: actionResolvers.FindUniqueTestResolver,
    getTest: actionResolvers.FindUniqueTestOrThrowResolver,
    groupByTest: actionResolvers.GroupByTestResolver,
    updateManyTest: actionResolvers.UpdateManyTestResolver,
    updateOneTest: actionResolvers.UpdateOneTestResolver,
    upsertOneTest: actionResolvers.UpsertOneTestResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  UserRefreshToken: ["aggregateUserRefreshToken", "createManyUserRefreshToken", "createOneUserRefreshToken", "deleteManyUserRefreshToken", "deleteOneUserRefreshToken", "findFirstUserRefreshToken", "findFirstUserRefreshTokenOrThrow", "userRefreshTokens", "userRefreshToken", "getUserRefreshToken", "groupByUserRefreshToken", "updateManyUserRefreshToken", "updateOneUserRefreshToken", "upsertOneUserRefreshToken"],
  Lesson: ["aggregateLesson", "createManyLesson", "createOneLesson", "deleteManyLesson", "deleteOneLesson", "findFirstLesson", "findFirstLessonOrThrow", "lessons", "lesson", "getLesson", "groupByLesson", "updateManyLesson", "updateOneLesson", "upsertOneLesson"],
  Test: ["aggregateTest", "createManyTest", "createOneTest", "deleteManyTest", "deleteOneTest", "findFirstTest", "findFirstTestOrThrow", "tests", "test", "getTest", "groupByTest", "updateManyTest", "updateOneTest", "upsertOneTest"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserRefreshTokenArgs: ["data"],
  CreateOneUserRefreshTokenArgs: ["data"],
  DeleteManyUserRefreshTokenArgs: ["where"],
  DeleteOneUserRefreshTokenArgs: ["where"],
  FindFirstUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserRefreshTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserRefreshTokenArgs: ["where"],
  FindUniqueUserRefreshTokenOrThrowArgs: ["where"],
  GroupByUserRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserRefreshTokenArgs: ["data", "where"],
  UpdateOneUserRefreshTokenArgs: ["data", "where"],
  UpsertOneUserRefreshTokenArgs: ["where", "create", "update"],
  AggregateLessonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyLessonArgs: ["data"],
  CreateOneLessonArgs: ["data"],
  DeleteManyLessonArgs: ["where"],
  DeleteOneLessonArgs: ["where"],
  FindFirstLessonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstLessonOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLessonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueLessonArgs: ["where"],
  FindUniqueLessonOrThrowArgs: ["where"],
  GroupByLessonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyLessonArgs: ["data", "where"],
  UpdateOneLessonArgs: ["data", "where"],
  UpsertOneLessonArgs: ["where", "create", "update"],
  AggregateTestArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTestArgs: ["data"],
  CreateOneTestArgs: ["data"],
  DeleteManyTestArgs: ["where"],
  DeleteOneTestArgs: ["where"],
  FindFirstTestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTestOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTestArgs: ["where"],
  FindUniqueTestOrThrowArgs: ["where"],
  GroupByTestArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTestArgs: ["data", "where"],
  UpdateOneTestArgs: ["data", "where"],
  UpsertOneTestArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserRefreshToken: ["user_id", "token"],
  Lesson: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  Test: ["id", "question"],
  UserPasswordType: ["initialPassword", "password"],
  Tests_id: ["t1", "t2", "t3", "t4", "t5"],
  TestQuestionType: ["question_name", "answer"],
  AnswerType: ["right_answer", "wrong_answers"],
  WrongAnswersType: ["asw1", "asw2", "asw3"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "username", "roles", "email", "name", "number_of_course_completed", "_count", "_min", "_max"],
  AggregateUserRefreshToken: ["_count", "_min", "_max"],
  UserRefreshTokenGroupBy: ["user_id", "token", "_count", "_min", "_max"],
  AggregateLesson: ["_count", "_avg", "_sum", "_min", "_max"],
  LessonGroupBy: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTest: ["_count", "_min", "_max"],
  TestGroupBy: ["id", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "username", "roles", "email", "name", "number_of_course_completed", "_all"],
  UserMinAggregate: ["id", "username", "email", "name"],
  UserMaxAggregate: ["id", "username", "email", "name"],
  UserRefreshTokenCountAggregate: ["user_id", "token", "_all"],
  UserRefreshTokenMinAggregate: ["user_id", "token"],
  UserRefreshTokenMaxAggregate: ["user_id", "token"],
  LessonCountAggregate: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "_all"],
  LessonAvgAggregate: ["prevelance_level", "exploit_ability_level", "impact_level"],
  LessonSumAggregate: ["prevelance_level", "exploit_ability_level", "impact_level"],
  LessonMinAggregate: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  LessonMaxAggregate: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  TestCountAggregate: ["id", "_all"],
  TestMinAggregate: ["id"],
  TestMaxAggregate: ["id"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserOrderByWithRelationInput: ["id", "username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserWhereUniqueInput: ["id", "username"],
  UserOrderByWithAggregationInput: ["id", "username", "roles", "email", "name", "number_of_course_completed", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "roles", "email", "name", "number_of_course_completed"],
  UserRefreshTokenWhereInput: ["AND", "OR", "NOT", "user_id", "token"],
  UserRefreshTokenOrderByWithRelationInput: ["user_id", "token"],
  UserRefreshTokenWhereUniqueInput: ["user_id", "token"],
  UserRefreshTokenOrderByWithAggregationInput: ["user_id", "token", "_count", "_max", "_min"],
  UserRefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "user_id", "token"],
  LessonWhereInput: ["AND", "OR", "NOT", "lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  LessonOrderByWithRelationInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  LessonWhereUniqueInput: ["lesson_id"],
  LessonOrderByWithAggregationInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "_count", "_avg", "_max", "_min", "_sum"],
  LessonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  TestWhereInput: ["AND", "OR", "NOT", "id", "question"],
  TestOrderByWithRelationInput: ["id", "question"],
  TestWhereUniqueInput: ["id"],
  TestOrderByWithAggregationInput: ["id", "_count", "_max", "_min"],
  TestScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id"],
  UserCreateInput: ["id", "username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserUpdateInput: ["username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserCreateManyInput: ["id", "username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserUpdateManyMutationInput: ["username", "roles", "email", "name", "password", "number_of_course_completed"],
  UserRefreshTokenCreateInput: ["user_id", "token"],
  UserRefreshTokenUpdateInput: ["token"],
  UserRefreshTokenCreateManyInput: ["user_id", "token"],
  UserRefreshTokenUpdateManyMutationInput: ["token"],
  LessonCreateInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  LessonUpdateInput: ["name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  LessonCreateManyInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  LessonUpdateManyMutationInput: ["name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level", "tests_id"],
  TestCreateInput: ["id", "question"],
  TestUpdateInput: ["question"],
  TestCreateManyInput: ["id", "question"],
  TestUpdateManyMutationInput: ["question"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  UserPasswordTypeNullableCompositeFilter: ["equals", "is", "isNot", "isSet"],
  UserPasswordTypeObjectEqualityInput: ["initialPassword", "password"],
  UserPasswordTypeOrderByInput: ["initialPassword", "password"],
  UserCountOrderByAggregateInput: ["id", "username", "roles", "email", "name", "number_of_course_completed"],
  UserMaxOrderByAggregateInput: ["id", "username", "email", "name"],
  UserMinOrderByAggregateInput: ["id", "username", "email", "name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  UserRefreshTokenCountOrderByAggregateInput: ["user_id", "token"],
  UserRefreshTokenMaxOrderByAggregateInput: ["user_id", "token"],
  UserRefreshTokenMinOrderByAggregateInput: ["user_id", "token"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  Tests_idCompositeFilter: ["equals", "is", "isNot"],
  Tests_idObjectEqualityInput: ["t1", "t2", "t3", "t4", "t5"],
  Tests_idOrderByInput: ["t1", "t2", "t3", "t4", "t5"],
  LessonCountOrderByAggregateInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  LessonAvgOrderByAggregateInput: ["prevelance_level", "exploit_ability_level", "impact_level"],
  LessonMaxOrderByAggregateInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  LessonMinOrderByAggregateInput: ["lesson_id", "name", "description", "descriptionFull", "protectionDescription", "prevelance_level", "exploit_ability_level", "impact_level"],
  LessonSumOrderByAggregateInput: ["prevelance_level", "exploit_ability_level", "impact_level"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TestQuestionTypeCompositeListFilter: ["equals", "every", "some", "none", "isEmpty", "isSet"],
  TestQuestionTypeObjectEqualityInput: ["question_name", "answer"],
  TestQuestionTypeOrderByCompositeAggregateInput: ["_count"],
  TestCountOrderByAggregateInput: ["id"],
  TestMaxOrderByAggregateInput: ["id"],
  TestMinOrderByAggregateInput: ["id"],
  UserCreaterolesInput: ["set"],
  UserPasswordTypeNullableCreateEnvelopeInput: ["set"],
  UserPasswordTypeCreateInput: ["initialPassword", "password"],
  UserCreatenumber_of_course_completedInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  UserUpdaterolesInput: ["set", "push"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  UserPasswordTypeNullableUpdateEnvelopeInput: ["set", "upsert", "unset"],
  UserUpdatenumber_of_course_completedInput: ["set", "push"],
  Tests_idCreateEnvelopeInput: ["set"],
  Tests_idCreateInput: ["t1", "t2", "t3", "t4", "t5"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  Tests_idUpdateEnvelopeInput: ["set", "update"],
  TestQuestionTypeListCreateEnvelopeInput: ["set"],
  TestQuestionTypeCreateInput: ["question_name", "answer"],
  TestQuestionTypeListUpdateEnvelopeInput: ["set", "push", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  UserPasswordTypeWhereInput: ["AND", "OR", "NOT", "initialPassword", "password"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  Tests_idWhereInput: ["AND", "OR", "NOT", "t1", "t2", "t3", "t4", "t5"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TestQuestionTypeWhereInput: ["AND", "OR", "NOT", "question_name", "answer"],
  AnswerTypeObjectEqualityInput: ["right_answer", "wrong_answers"],
  UserPasswordTypeUpsertInput: ["set", "update"],
  Tests_idUpdateInput: ["t1", "t2", "t3", "t4", "t5"],
  AnswerTypeCreateInput: ["right_answer", "wrong_answers"],
  TestQuestionTypeUpdateManyInput: ["where", "data"],
  TestQuestionTypeDeleteManyInput: ["where"],
  BoolFilter: ["equals", "not"],
  AnswerTypeCompositeFilter: ["equals", "is", "isNot"],
  WrongAnswersTypeObjectEqualityInput: ["asw1", "asw2", "asw3"],
  UserPasswordTypeUpdateInput: ["initialPassword", "password"],
  WrongAnswersTypeCreateInput: ["asw1", "asw2", "asw3"],
  TestQuestionTypeUpdateInput: ["question_name", "answer"],
  NestedBoolFilter: ["equals", "not"],
  AnswerTypeWhereInput: ["AND", "OR", "NOT", "right_answer", "wrong_answers"],
  BoolFieldUpdateOperationsInput: ["set"],
  AnswerTypeUpdateEnvelopeInput: ["set", "update"],
  WrongAnswersTypeCompositeFilter: ["equals", "is", "isNot"],
  AnswerTypeUpdateInput: ["right_answer", "wrong_answers"],
  WrongAnswersTypeWhereInput: ["AND", "OR", "NOT", "asw1", "asw2", "asw3"],
  WrongAnswersTypeUpdateEnvelopeInput: ["set", "update"],
  WrongAnswersTypeUpdateInput: ["asw1", "asw2", "asw3"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

