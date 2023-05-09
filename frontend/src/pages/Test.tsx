import { useParams } from "react-router-dom";
import TestContent from "../components/Test/TestContent";

type Props = {}

const Test = ({}: Props) => {
    const { id } = useParams();
    
    return (
        <TestContent id={id}/> 
    );
}

export default Test