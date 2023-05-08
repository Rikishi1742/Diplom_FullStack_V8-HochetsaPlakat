import { useParams } from "react-router-dom";
import TestContent from "../components/Test/TestContent";

type Props = {}
const Test = ({}: Props) => {

    const TestId = useParams();
    

    return (
        <TestContent Id={TestId}/> 
    );
}

export default Test