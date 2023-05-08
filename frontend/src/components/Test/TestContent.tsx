import { useQuery } from "@apollo/client";
import { GET_TEST_BY_ID } from '../../GraphQL/queries';
import ThreeDotsWave from "../../components/Anims/three-dots-wave";

const TestContent = (props) => {

    const TestId  = props.Id;
    const { loading, error, data } = useQuery(GET_TEST_BY_ID, {
        variables: {"where": { "id": TestId }}
    });
    
    if (loading) return (
        <>
            <ThreeDotsWave />
        </>
    )
    
    console.log(TestId)

    return (
        <>
            <h2>{data?.getTest}</h2>
        </>    
    );
}

export default TestContent