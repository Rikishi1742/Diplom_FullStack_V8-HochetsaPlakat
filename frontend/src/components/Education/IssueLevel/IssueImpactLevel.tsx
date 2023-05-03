const IconImpact = () => {
    return (
        <img src="../ImpactLevel.svg" alt="" />
    );
}


const IssueImpactLevell = (props) => {
    let Level = props.quantity;
    let LevelElem = [];

    if (Level > 3) {
        Level = 3;
    }

    if (Level < 1) {
        Level = 1;
    }

    for (let i = 0; i < Level; i++) {
        LevelElem[i] = <IconImpact key={i} />
    }

    if (Level < 3) {
        LevelElem[3] = <div style={{width: "30%", height: "50%"}}></div>
    }

    if (Level < 2) {
        LevelElem[2] = <div style={{width: "30%", height: "50%"}}></div>
    }

    return (
        <>
            {LevelElem}
        </>
    );
}

export default IssueImpactLevell