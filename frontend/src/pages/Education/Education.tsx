import React from 'react'
import EducationDescription from '../../components/Education/EducationDescription'

type Props = {}

function Education({}: Props) {
  return (
    <div className='Container'>
        <EducationDescription LessonsCount={5}/>
    </div>
  )
}

export default Education