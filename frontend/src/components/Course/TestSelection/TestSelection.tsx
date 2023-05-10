import Button from "../../Elements/Button";

const TestSelection = (props) => {

    const testIdArray = Object.values(props.testId);
    let elementsId = [];

    for (let i = 1; i < testIdArray.length; i++) {
        

        if (testIdArray[i] == 'null') {
            
        } else {
            elementsId[i] = testIdArray[i];
            
        }
    }

    console.log(elementsId)

    return (
        <>
            <div>
                {elementsId.map((element) => (
                    <Button Value="Test yourself" href={'/test/' + element}></Button>
                ))}
            </div>
        </>
    );

}

export default TestSelection