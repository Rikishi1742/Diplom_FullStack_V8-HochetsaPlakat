import EducationLessons from "./EducationLesson";

const EducationDescription = (props) => {
    let LessonsCount = props.LessonsCount;
    let ElemArray = [];

    for (let i = 0; i < props.LessonsCount; i++) {
        ElemArray[i] = <EducationLessons name={"Broken Access Control"} description={"Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits."} />
    }

    return (
        <>
            
        </>
    );
}

export default EducationDescription