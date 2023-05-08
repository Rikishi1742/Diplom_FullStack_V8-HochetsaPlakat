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
query GetLesson($where: LessonWhereUniqueInput!) {
  lesson(where: $where) {
    name
    description
    descriptionFull
    protectionDescription
    exploit_ability_level
    prevelance_level
    impact_level
    tests_id {
      t1
      t2
      t3
      t4
      t5
    }
  }
}
`;

export const GET_TEST_BY_ID = gql`
query GetTest($where: TestWhereUniqueInput!) {
  getTest(where: $where) {
    question {
      question
      answer {
        right_answer
        wrong_answers {
          asw1
          asw2
          asw3
        }
      }
    }
  }
}

`;