import { gql } from '@apollo/client';

export const GET_USERS = gql`
query GetUsers {
    users {
      email,
      id,
      name,
      username,
      password {
        initialPassword,
        password
      }
    }
  }
`

export const GET_LESSONS = gql`
query GetLessons {
  lessons {
    lesson_id
    name
    description
    prevelance_level
    impact_level
    exploit_ability_level
    descriptionFull
  }
} 
`

export const GET_USER_BY_ID = gql`
query GetUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    username
    id
    number_of_course_completed
  }
}
`;

export const GET_LESSON_BY_ID = gql`
query Query($where: LessonWhereUniqueInput!) {
  lesson(where: $where) {
    name
    description
    descriptionFull
    protectionDescription
    exploit_ability_level
    impact_level
    prevelance_level
  }
}
`;