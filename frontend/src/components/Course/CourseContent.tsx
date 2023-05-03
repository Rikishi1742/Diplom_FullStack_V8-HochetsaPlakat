import ThreeDotsWave from '../Anims/three-dots-wave';
import { useQuery } from '@apollo/client';
import { GET_LESSON_BY_ID } from '../../GraphQL/queries';
import TestButton from '../Education/TestButton';


const CourseContent = (props) => {
    
    const CourseId = props.id;
    const { loading, error, data } = useQuery(GET_LESSON_BY_ID, {
        variables: {"where": { "lesson_id": CourseId }}
    });
    
    
    if (loading) return (
        <>
            <ThreeDotsWave />
        </>
    )
    return (
        <>
            <div className='Container' style={{height: "auto", marginTop: "15vh", marginBottom: "15vh", color: "#fff"}}>
                
                <div className='CourseContent' >
                    <div>
                        <h2>{data?.lesson.name}</h2>
                        <p>{data?.lesson.description}</p>
                    </div>

                    <div className='TestsSection'>
                        <TestButton PrevalenceLevel={data?.lesson.prevelance_level} ExploitAbilityLevel={data?.lesson.exploit_ability_level} ImpactLevel={data?.lesson.impact_level} />
                    </div>

                    <p>{data?.lesson.descriptionFull}</p>

                    <h2>Protection</h2>

                    <p>{data?.lesson.protectionDescription}</p>
                    
                </div>
            </div>
            
        </>
    );
}

export default CourseContent