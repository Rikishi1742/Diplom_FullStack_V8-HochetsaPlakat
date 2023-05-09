import { useQuery } from "@apollo/client";
import { GET_TEST_BY_ID } from '../../GraphQL/queries';
import ThreeDotsWave from "../../components/Anims/three-dots-wave";

const TestContent = (props) => {

    const TestId  = props.id;
    const { loading, error, data } = useQuery(GET_TEST_BY_ID, {
        variables: {"where": { "id": TestId }}
    });
    
    if (loading) return (
        <>
            <ThreeDotsWave />
        </>
    )

    return (
        <>
            <h2>{data?.getTest.question.question}</h2>
        </>    
    );
}

export default TestContent