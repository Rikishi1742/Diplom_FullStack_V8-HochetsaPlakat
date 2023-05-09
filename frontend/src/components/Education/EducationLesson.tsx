import Button from '../Elements/Button';
import './EducationLesson.css'
import TestButton from './TestButton';

import { UserContext, LoginStatus } from "../../context/UserContext";
import { useContext } from 'react';

const EducationLesson = (props) => {
    const { loginStatus } = useContext(UserContext);

    return (
        <>
            <div className="LessonSection">
                <div>
                    <h2>{(props.items.name).toString()}</h2>
                    <p>{(props.items.description).toString()}</p>

                    <div className='TestsSection'>
                        <TestButton PrevalenceLevel={props.items.prevelance_level} ExploitAbilityLevel={props.items.exploit_ability_level} ImpactLevel={props.items.impact_level} />
                    </div>

                    {loginStatus == LoginStatus.LoggedOut && <>
                        <Button Value="Read more" href="/login"></Button>
                    </>
                    }

                    {loginStatus == LoginStatus.LoggedIn && <>
                        <Button Value="Read more" href={'/courseId/' + props.items.lesson_id}></Button>
                    </>
                    }
                </div>

            </div>
        </>

    );
}

export default EducationLesson