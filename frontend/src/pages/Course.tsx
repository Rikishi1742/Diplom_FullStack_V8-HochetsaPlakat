import React from 'react'
import { useParams } from 'react-router-dom'
import CourseContent from '../components/Course/CourseContent';

type Props = {}

function HomePage({}: Props) {
  const { id } = useParams();
  
  return (
      <CourseContent id={id}/>
  )
}

export default HomePage