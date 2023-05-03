import EducationLesson from "./EducationLesson";
import { useQuery, gql } from '@apollo/client';
import { GET_LESSONS } from '../../GraphQL/queries';
import React from "react";
import ThreeDotsWave from "../Anims/three-dots-wave";
import LazyShow from "../Anims/LazyShow";

const EducationDescription = () => {

    const { loading, error,data } = useQuery(GET_LESSONS);

    if (loading) return (
        <>
            <ThreeDotsWave />
        </>
    )
        


    return (

        <div className='Container' style={{height: "auto", marginTop: "15vh", marginBottom: "15vh"}}>
            <div>
                {data?.lessons?.map((lesson) => (
                    <LazyShow>
                        <EducationLesson key={lesson}
                        items={lesson}
                        />
                    </LazyShow>
                ))}
            </div>
        </div>
        
    );
}

export default EducationDescription