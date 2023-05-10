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

    let dataArray = [];
    const Array = data.getTest.question;

    console.log(Array);

    return (
        <div className="Container">
            <h2>{dataArray[1]}</h2>
        </div>    
    );
}

export default TestContent