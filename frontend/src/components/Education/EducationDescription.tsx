import EducationLesson from "./EducationLesson";
import { useQuery, gql } from '@apollo/client';
import { GET_LESSONS } from '../../GraphQL/queries';
import React from "react";
import ThreeDotsWave from "../Anims/three-dots-wave";
import LazyShow2 from "../Anims/LazyShow2";

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
                    <LazyShow2>
                        <EducationLesson key={lesson}
                        items={lesson}
                        />
                    </LazyShow2>
                ))}
            </div>
        </div>
        
    );
}

export default EducationDescription