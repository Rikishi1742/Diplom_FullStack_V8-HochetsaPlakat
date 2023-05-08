import ThreeDotsWave from '../Anims/three-dots-wave';
import { useQuery } from '@apollo/client';
import { GET_LESSON_BY_ID } from '../../GraphQL/queries';
import TestButton from '../Education/TestButton';
import LazyShow from '../Anims/LazyShow';
import Button from '../Elements/Button';
import { json } from 'stream/consumers';


const CourseContent = (props) => {
    
    const CourseId = props.id;
    const { loading, error, data } = useQuery(GET_LESSON_BY_ID, {
        variables: {"where": { "lesson_id": CourseId }}
    });

    console.log(CourseId)
    
    
    if (loading) return (
        <>
            <ThreeDotsWave />
        </>
    )

    const firstTest = data?.lesson.tests_id.t1

    return (
        <>
            <div className='Container' style={{height: "auto", marginTop: "15vh", marginBottom: "15vh", color: "#fff"}}>
                
                <div className='CourseContent' >
                    <div>
                        <h2>{data?.lesson.name}</h2>
                        <p>{data?.lesson.description}</p>
                    </div>

                    <br />

                    <div className='TestsSection'>
                        <TestButton PrevalenceLevel={data?.lesson.prevelance_level} ExploitAbilityLevel={data?.lesson.exploit_ability_level} ImpactLevel={data?.lesson.impact_level} />
                    </div>

                    <br />

                    <p>{data?.lesson.descriptionFull}</p>

                    <br />

                    <h2>Protection</h2>

                    <p>{data?.lesson.protectionDescription}</p>

                    <Button Value="Test yourself" href={'/test/' + firstTest}></Button>
                    
                </div>
            </div>
            
        </>
    );
}

export default CourseContent